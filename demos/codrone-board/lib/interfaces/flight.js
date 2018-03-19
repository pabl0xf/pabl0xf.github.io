import { commandManager } from '../commandManager.js';
import TakeOff from '../commands/takeOff.js';
import Go from '../commands/go.js';
import Rotate180 from '../commands/rotate180.js';
import Land from '../commands/land.js';
import EmergencyStop from '../commands/emergencyStop.js';

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
  var goCommand = new Go(direction, seconds);
  commandManager.addCommand(goCommand);
}
