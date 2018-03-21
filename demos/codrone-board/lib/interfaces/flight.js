import { commandManager } from '../commandManager.js';
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

global.go = function (direction, seconds){
  flightInteface.goIntevalId = setInterval(async function() {
      var goCommand = new Go(direction);
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
