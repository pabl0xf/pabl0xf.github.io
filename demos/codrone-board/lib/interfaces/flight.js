import { commandManager } from '../commandManager.js';
import TakeOff from '../commands/takeOff.js';
import Rotate180 from '../commands/rotate180.js';


global.takeOff = function (){
  var takeOff = new TakeOff();
  commandManager.addCommand(takeOff);
}

global.rotate180 = function(){
  var rotate180 = new Rotate180();
  commandManager.addCommand(rotate180);
}

global.land = function (){
  alert('land');
}.bind(this);
