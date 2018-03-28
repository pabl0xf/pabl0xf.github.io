import { commandManager } from '../commandManager.js';
import Move from '../commands/move.js';
import TakeOff from '../commands/takeOff.js';
import Go from '../commands/go.js';
import Hover from '../commands/hover.js';
import Rotate180 from '../commands/rotate180.js';
import Land from '../commands/land.js';
import EmergencyStop from '../commands/emergencyStop.js';

var flightInteface = {};

global.takeOff = function (){
  var takeOff = new TakeOff();
  commandManager.addCommand(takeOff);
}

global.rotate180 = function(){
  var rotate180 = new Rotate180();
  commandManager.addCommand(rotate180);
}

global.land = function (){
  var land = new Land();
  commandManager.addCommand(land);
}

global.emergencyStop = function (){
  var emergencyStop = new EmergencyStop();
  commandManager.addCommand(emergencyStop);
}

global.go = function (direction, seconds, power){
  flightInteface.goIntevalId = setInterval(async function() {
      var goCommand = new Go(direction, power);
      commandManager.addCommand(goCommand);
    }.bind(this), 10);

    setTimeout(function() {
      clearInterval(flightInteface.goIntevalId);
    }.bind(this), seconds * 1000);
}

global.hover = function (seconds){
  flightInteface.hoverIntevalId = setInterval(async function() {
      var hoverCommand = new Hover();
      commandManager.addCommand(hoverCommand);
    }.bind(this), 10);

    setTimeout(function() {
      clearInterval(flightInteface.hoverIntevalId);
    }.bind(this), seconds * 1000);
}

global.move = function (seconds){
  flightInteface.moveIntevalId = setInterval(async function() {
      var moveCommand = new Move();
      commandManager.addCommand(moveCommand);
    }.bind(this), 10);

    setTimeout(function() {
      clearInterval(flightInteface.moveIntevalId);
    }.bind(this), seconds * 1000);
}

global.turn = async function (direction, degree, power){

  if(power){
    turnWithDirectionAndPower(direction, degree, power);
    return;
  }

  direction = (direction == global.RIGHT ? 1 : -1);

  var angle = await getGyroAngles();
  console.log(direction);
	var speed = direction * 30;
  console.log(speed);
	var dest = 360 + angle.yawDegree + degree * direction;
  console.log(dest);
	var min = (dest - 5)%360;
  console.log(min);
	var max = (dest + 5)%360;
  console.log(max);

  flightInteface.turnIntevalId = setInterval(async function() {
    setTimeout(async function(){
      var angle = await getGyroAngles();
      		if(min>max){
      			if(min<angle.yawDegree || max>angle.yawDegree) {
              clearInterval(flightInteface.turnIntevalId);
              var hoverCommand = new Hover(1);
              commandManager.addCommand(hoverCommand);
            }
      		}
      		else {
      			if(min<angle.yawDegree && max>angle.yawDegree) {
              clearInterval(flightInteface.turnIntevalId);
              var hoverCommand = new Hover(1);
              commandManager.addCommand(hoverCommand);
            }

      		}
          console.log('speed:' + speed);
          var moveCommand = new Move(0,0,speed,0);
          commandManager.addCommand(moveCommand);

      }.bind(this), 5);
   }.bind(this), 10);
}


global.turnWithDirectionAndPower = function (direction, seconds, power){
  var y = power;
	if(direction == global.LEFT){
		y *= -1;
  }

  flightInteface.turnWithDirectionAndPowerInterval = setInterval(async function() {
      var moveCommand = new Move(0,0,y,0);
      commandManager.addCommand(moveCommand);
    }.bind(this), 10);

    setTimeout(function() {
      clearInterval(flightInteface.turnWithDirectionAndPowerInterval);
      hover(1);
    }.bind(this), seconds * 1000);
}

global.goToHeight = function (heightSet){
  flightInteface.goToHeightIntevalId = setInterval(async function() {
      var currentHeight = await getHeight();
      console.log(currentHeight + "current height");

      if(currentHeight < heightSet - 100){
        console.log(currentHeight + "first if");
        var moveCommand = new Move(0,0,0,20);
        commandManager.addCommand(moveCommand);
      }
  		else if(currentHeight > heightSet + 100){
        console.log(currentHeight + "second if");
        var moveCommand = new Move(0,0,0,-20);
        commandManager.addCommand(moveCommand);
      }
  		else if( currentHeight > heightSet-100 || currentHeight < heightSet+ 100){
        console.log(currentHeight + "out");
        var hoverCommand = new Hover();
        commandManager.addCommand(hoverCommand);
  			clearInterval(flightInteface.goToHeightIntevalId);
  		}

    }.bind(this), 10);
}


global.removeFlightIntervals = function(){
    clearInterval(flightInteface.moveIntevalId);
    clearInterval(flightInteface.turnIntevalId);
    clearInterval(flightInteface.goToHeightIntevalId);
    clearInterval(flightInteface.hoverIntevalId);
    clearInterval(flightInteface.goIntevalId);
}
