import Command from './command.js';
import { sensorBattery } from '../../types/sensorTypes.js';

export default class GetHeight extends Command {
  constructor(){
      //var batteryPackage = sensorBattery;
      var dataArray = new Uint8Array(3);
      dataArray[0] = 17;
      dataArray[1] = 144;
      dataArray[2] = 87;
      super(dataArray, 'getHeight');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
    const value = await Code.readCharacteristic.readValue();

    var arrayResult = new Uint8Array(value.buffer);
    console.log(arrayResult);
    //var event = new CustomEvent(this.eventName, { detail: batteryPorcentageValue });
    //dispatchEvent(event);
  }
}
