import Command from './command.js';
import { sensorBattery } from '../types/sensorTypes.js';

export default class GetBatteryPercentage extends Command {
  constructor(){
      var batteryPackage = sensorBattery;
      super(batteryPackage, 'batteryPorcentage');
  }

  async run(){
    await this.sendBLECommand(this.package);
    const value = await Code.readCharacteristic.readValue();

    var arrayResult = new Uint8Array(value.buffer);
    let batteryPorcentageValue = arrayResult[7] & 0xFF;
    var event = new CustomEvent(this.eventName, { detail: batteryPorcentageValue });
    dispatchEvent(event);
  }
}
