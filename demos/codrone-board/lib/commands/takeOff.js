import Command from './command.js';
import { bytesTakeOff } from '../types/flyEventsTypes.js';

export default class TakeOff extends Command {
  constructor(){
      var packageTakeoff = bytesTakeOff;
      super(packageTakeoff, '');
  }

  async run(){
    console.log('takeOff');
    await Code.writeCharacteristic.writeValue(this.package);
  }
}
