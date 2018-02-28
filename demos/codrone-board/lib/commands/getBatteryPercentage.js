import Command from './command.js';
import { sensorBattery } from '../../types/sensorTypes.js';

export default class GetBatteryPercentage extends Command {
  constructor(){
      var batteryPackage = sensorBattery;
      super(batteryPackage, 'batteryPorcentage');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
    const value = await Code.readCharacteristic.readValue();

    var arrayResult = new Uint8Array(value.buffer);
    console.log('Battery percentage is ' + arrayResult);
    $('#testSensorBatteryLabel').show();
    let batteryPorcentageValue = arrayResult[7] & 0xFF;
    $('#batteryPercentageValue').html(batteryPorcentageValue);
    var event = new CustomEvent(this.eventName, { detail: batteryPorcentageValue });
    dispatchEvent(event);
  }

  async getBatteryValue (){
    return new Promise(function(resolve, reject) {
           addEventListener(this.eventName, function (e) {
             resolve(e.detail);
            }, false);
    }.bind(this));
  }
}
