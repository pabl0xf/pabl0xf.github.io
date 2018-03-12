import { commandManager } from '../commandManager.js';
import GetBatteryPercentage from '../commands/getBatteryPercentage.js';
import GetBatteryVoltage from '../commands/getBatteryVoltage.js';
import GetHeight from '../commands/getHeight.js';

global.getBatteryPercentage = function (){
   var getBatteryPercentage = new GetBatteryPercentage();
   var batteryValue = getBatteryPercentage.getValue();
   commandManager.addCommand(getBatteryPercentage);
   return batteryValue;
}

global.getBatteryVoltage = function (){
  var getBatteryVoltage = new GetBatteryVoltage();
  var batteryValue = getBatteryVoltage.getValue();
  commandManager.addCommand(getBatteryVoltage);
  return batteryValue;
}

global.getHeight = function (){
   var getHeight = new GetHeight();
   var height = getHeight.getValue();
   commandManager.addCommand(getHeight);
   return height;
}
