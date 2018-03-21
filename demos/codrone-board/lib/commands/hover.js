import Command from './command.js';
import { bytesHover } from '../types/flyEventsTypes.js';

export default class Hover extends Command {
  constructor(){
      var packageHover = bytesHover;
      super(packageHover, '');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
  }
}
