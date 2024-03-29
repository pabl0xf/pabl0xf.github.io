import Command from './command.js';
import { ledColorRGB } from '../model/data.js';

export default class SetArmColor extends Command {
  constructor(rValue, gValue, bValue, armMode, interval){
    ledColorRGB.armColorR = rValue;
    ledColorRGB.armColorG = gValue;
    ledColorRGB.armColorB = bValue;

    var armColorPackage = new Uint8Array(6);
    armColorPackage[0] = 0x24;
    armColorPackage[1] = armMode;
    armColorPackage[2] = rValue;
    armColorPackage[3] = gValue;
    armColorPackage[4] = bValue;
    armColorPackage[5] = interval;
      super(armColorPackage, 'SetArmLED');
  }

  async run(){
    await this.sendBLECommand(this.package);
  }
}
