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
  var promiseCommand = new Promise(function(resolve, reject) {
    var takeOff = new TakeOff();
    commandManager.addCommand(takeOff);
    setTimeout(function(){
        resolve();
      }.bind(this), 3000);
  });

  return promiseCommand;
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

global.hover = function (seconds){
  var promiseCommand = new Promise(function(resolve, reject) {
  flightInteface.intervalId = setInterval(function() {
      var hoverCommand = new Hover();
      commandManager.addCommand(hoverCommand);
    }.bind(this), 20);

    setTimeout(function() {
      clearInterval(flightInteface.intervalId);
      commandManager.cleanStack();
      setTimeout(function() {
        resolve();
      }.bind(this), 500);
    }.bind(this), seconds * 1000);
  });

  return promiseCommand;
}

global.go = function (direction, seconds, power){
  var promiseCommand = new Promise(function(resolve, reject) {
    flightInteface.intervalId= setInterval(async function() {
        var goCommand = new Go(direction, power);
        commandManager.addCommand(goCommand);
      }.bind(this), 20);

      setTimeout(async function() {
        clearInterval(flightInteface.intervalId);
        commandManager.cleanStack();
        await global.hover(1);
          setTimeout(async function() {
            resolve();
          }.bind(this), 500);
      }.bind(this), seconds * 1000);
  });

  return promiseCommand;
}

global.move = function (pitch, roll, yaw, throttle){
  var promiseCommand = new Promise(function(resolve, reject) {
      var moveCommand = new Move(pitch, roll, yaw, throttle);
      commandManager.addCommand(moveCommand);
  });

  return promiseCommand;
}

global.turn = async function (direction, degree, power){

  if(power){
    turnWithDirectionAndPower(direction, degree, power);
    return;
  }

  var angle = await getGyroAngles();
  console.log('Initial yawDegree:' + angle.yawDegree);

  var speed = direction * 30;

	var dest = 360 + angle.yawDegree + degree * direction;

	var min = (dest - 5)%360;

	var max = (dest + 5)%360;


  var promiseCommand = new Promise(function(resolve, reject) {
    flightInteface.intervalId = setInterval(async function() {
        var angle = await getGyroAngles();
        		if(min>max){
            //  console.log('First big if');
        			if(min<angle.yawDegree || max>angle.yawDegree) {
                clearInterval(flightInteface.intervalId);
                commandManager.cleanStack();
                await global.hover(1);
                resolve();
              }
        		}
        		else {
            //  console.log('Big else');
              console.log('min:' + min + 'yawDegree:' + angle.yawDegree);
            //  console.log('max:' + max);
        			if(min<angle.yawDegree && max>angle.yawDegree) {
                clearInterval(flightInteface.intervalId);
                commandManager.cleanStack();
                await global.hover(1);
                resolve();
              }
        		}

            //time out after 3 sec

            console.log('speed:' + speed);
            var moveCommand = new Move(0,0,speed,0);
            commandManager.addCommand(moveCommand);
     }.bind(this), 10);

   });

   return promiseCommand;
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
    clearInterval(flightInteface.intervalId);
}
