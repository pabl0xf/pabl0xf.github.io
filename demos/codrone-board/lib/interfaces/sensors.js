import { commandManager } from '../commandManager.js';
import GetBatteryPercentage from '../commands/getBatteryPercentage.js';

function getBytesFromType(type) {
    return packages[type];
}

global.getBatteryPercentage = async function (){
   var getBatteryPercentage = new GetBatteryPercentage();
   var batteryValue = getBatteryPercentage.getBatteryValue();
   commandManager.addCommand(getBatteryPercentage);
   return batteryValue;
}.bind(this);
