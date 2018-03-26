import Command from './command.js';
import { sensorHeight } from '../types/sensorTypes.js';

export default class GetHeight extends Command {
  constructor(){
      var sensorPackage = sensorHeight;
      super(sensorPackage, 'getHeight');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
    const value = await Code.readCharacteristic.readValue();

    var arrayResult = new Uint8Array(value.buffer);
    let heightValue = 0;
    if(arrayResult.length>11){
      heightValue = ((arrayResult[12] << 8)| (arrayResult[11]  & 0xff));
    }
    var event = new CustomEvent(this.eventName, { detail: heightValue });
    dispatchEvent(event);
  }
}
