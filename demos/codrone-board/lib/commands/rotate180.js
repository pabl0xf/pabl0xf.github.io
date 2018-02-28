import Command from './command.js';
import { bytesRotate180 } from '../../types/flyEventsTypes.js';

export default class Rotate180 extends Command {
  constructor(){
      var packageRotate180 = bytesRotate180;
      super(packageRotate180, false);
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
  }
}
