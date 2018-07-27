import { commandManager } from '../commandManager.js';
import GetBatteryPercentage from '../commands/getBatteryPercentage.js';
import GetBatteryVoltage from '../commands/getBatteryVoltage.js';
import GetHeight from '../commands/getHeight.js';
import GetPressure from '../commands/getPressure.js';
import GetGyroAngles from '../commands/getGyroAngles.js';

global.getBatteryPercentage = function (){
   var getBatteryPercentage = new GetBatteryPercentage();
   var batteryValue = getBatteryPercentage.getValue();
   getBatteryPercentage.run()
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
   getHeight.run()
   return height;
}

global.getGyroAngles = function (){
   var getGyroAngles = new GetGyroAngles();
   var gyroAngles = getGyroAngles.getValue();
   getGyroAngles.run();
   return gyroAngles;
}

global.getPressure = function (){
   var getPressure = new GetPressure();
   var pressure = getPressure.getValue();
   commandManager.addCommand(getPressure);
   return pressure;
}
