import Command from './command.js';
import { sensorAngularSpeed } from '../types/sensorTypes.js';

export default class GetAngularSpeed extends Command {
  constructor(){
      var sensorPackage = sensorAngularSpeed;
      super(sensorPackage, 'getAngularSpeed');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
    const value = await Code.readCharacteristic.readValue();

    var arrayResult = new Uint8Array(value.buffer);
    console.log(arrayResult);
    let pressureValue = arrayResult[7] & 0xFF;
    var event = new CustomEvent(this.eventName, { detail: pressureValue });
    dispatchEvent(event);
  }
}
