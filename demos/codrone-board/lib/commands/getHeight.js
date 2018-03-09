import Command from './command.js';
import { sensorHeight } from '../../types/sensorTypes.js';

export default class GetHeight extends Command {
  constructor(){
      var sensorPackage = sensorHeight;
      super(sensorPackage, 'getHeight');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
    const value = await Code.readCharacteristic.readValue();

    var arrayResult = new Uint8Array(value.buffer);
    console.log(arrayResult);
    let heightValue = arrayResult[7] & 0xFF;
    var event = new CustomEvent(this.eventName, { detail: heightValue });
    dispatchEvent(event);
  }
}
