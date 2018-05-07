import Command from './command.js';
import { bytesFlyForward } from '../types/flyEventsTypes.js';
import { bytesFlyBackward } from '../types/flyEventsTypes.js';
import { bytesFlyUp } from '../types/flyEventsTypes.js';
import { bytesFlyDown } from '../types/flyEventsTypes.js';
import { bytesFlyLeft } from '../types/flyEventsTypes.js';
import { bytesFlyRight } from '../types/flyEventsTypes.js';

export default class Go extends Command {
  constructor(direction, power){
      var packagesFly = [bytesFlyForward, bytesFlyBackward,
            bytesFlyUp, bytesFlyDown, bytesFlyLeft, bytesFlyRight];
      super(packagesFly, 'go - direction: '+direction + ' power: '+power);
      this.direction = direction;
      this.power = power;
  }

  async run(){
    var r,p,t;
  	r = p = t = 0;

    var packageToSend = null;

    switch(this.direction){
      case global.FORWARD:
         p = this.power;
         packageToSend = this.package[0];
      break;
      case global.BACKWARD:
      	t = this.power;
        packageToSend = this.package[1];
      break;
      case global.UP:
        r = this.power;
        packageToSend = this.package[2];
        break;
      break;
      case global.DOWN:
        p = (-1)*this.power;
        packageToSend = this.package[3];
      break;
      case global.LEFT:
      	t = (-1)*this.power;
        packageToSend = this.package[4];
      break;
      case global.RIGHT:
      	r = (-1)*this.power;
        packageToSend = this.package[5];
      break;
    }

    if(this.power){
      var goWithPowerPackage = packageToSend;
      goWithPowerPackage[1] = r;
      goWithPowerPackage[2] = p;
      goWithPowerPackage[3] = 0;
      goWithPowerPackage[4] = t
      await this.sendBLECommand(goWithPowerPackage);
    }
    else {
      await this.sendBLECommand(packageToSend);
    }
  }
}
