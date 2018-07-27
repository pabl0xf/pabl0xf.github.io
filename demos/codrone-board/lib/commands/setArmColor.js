import Command from './command.js';
import { bytesLand } from '../types/flyEventsTypes.js';

export default class SetArmColor extends Command {
  constructor(rValue, gValue, bValue){
    var armColorPackage = new Uint8Array(6);
    armColorPackage[0] = 0x24;
    armColorPackage[1] = 0x41;
    armColorPackage[2] = rValue;
    armColorPackage[3] = gValue;
    armColorPackage[4] = bValue;
    armColorPackage[5] = 100;
      super(armColorPackage, 'SetArmColor');
  }

  async run(){
    await this.sendBLECommand(this.package);
  }
}
