import Command from './command.js';
import { bytesLand } from '../types/flyEventsTypes.js';

export default class Land extends Command {
  constructor(){
      var packageLand = bytesLand;
      super(packageLand, '');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
  }
}
