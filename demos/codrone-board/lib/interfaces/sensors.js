import { commandManager } from '../commandManager.js';
import GetBatteryPercentage from '../commands/getBatteryPercentage.js';
import GetBatteryVoltage from '../commands/getBatteryVoltage.js';
import GetHeight from '../commands/getHeight.js';
import GetPressure from '../commands/getPressure.js';
import GetGyroAngles from '../commands/getGyroAngles.js';
import GetAngularSpeed from '../commands/getAngularSpeed.js';

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

global.getGyroAngles = function (){
   var getGyroAngles = new GetGyroAngles();
   var gyroAngles = getGyroAngles.getValue();
   commandManager.addCommand(getGyroAngles);
   return gyroAngles;
}

global.getPressure = function (){
   var getPressure = new GetPressure();
   var pressure = getPressure.getValue();
   commandManager.addCommand(getPressure);
   return pressure;
}

global.getAngularSpeed = function (){
   var getAngularSpeed = new GetAngularSpeed();
   var angularSpeed = GetAngularSpeed.getValue();
   commandManager.addCommand(getAngularSpeed);
   return angularSpeed;
}
