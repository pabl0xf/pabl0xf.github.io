import Command from './command.js';

export default class Move extends Command {
  constructor(roll, pitch, yaw, throttle){
    var movePackage = new Uint8Array(5);
    movePackage[0] = 16;
    movePackage[1] = roll;
    movePackage[2] = pitch;
    movePackage[3] = throttle;
    super(movePackage, '');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
  }
}
