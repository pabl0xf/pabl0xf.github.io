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

global.goToHeight = function (heightSet){
  flightInteface.goToHeightIntevalId = setInterval(async function() {
      var currentHeight = await getHeight();
      console.log(currentHeight + "current height");

      if(currentHeight < heightSet - 100){
        console.log(currentHeight + "first if");
        var moveCommand = new Move(0,0,0,20);
        commandManager.addCommand(moveCommand);
        //move(0,0,0,20);
      }
  		else if(currentHeight > heightSet + 100){
        console.log(currentHeight + "second if");
        var moveCommand = new Move(0,0,0,-20);
        commandManager.addCommand(moveCommand);
        //move(0,0,0,-20);
      }
  		else if( currentHeight > heightSet-100 || currentHeight < heightSet+ 100){
        console.log(currentHeight + "out");
        var hoverCommand = new Hover();
        commandManager.addCommand(hoverCommand);
  			clearInterval(flightInteface.goToHeightIntevalId);
  		}

    }.bind(this), 10);
}
