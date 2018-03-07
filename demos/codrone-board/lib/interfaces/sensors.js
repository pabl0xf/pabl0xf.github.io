import { commandManager } from '../commandManager.js';
import GetBatteryPercentage from '../commands/getBatteryPercentage.js';
import GetHeight from '../commands/getHeight.js';

global.getBatteryPercentage = function (){
   var getBatteryPercentage = new GetBatteryPercentage();
   var batteryValue = getBatteryPercentage.getValue();
   commandManager.addCommand(getBatteryPercentage);
   return batteryValue;
}.bind(this);

global.getHeight = function (){
   var getHeight = new GetHeight();
   var height = getHeight.getValue();
   commandManager.addCommand(getHeight);
   return height;
}.bind(this);
