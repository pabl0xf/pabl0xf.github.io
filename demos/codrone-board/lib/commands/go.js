import Command from './command.js';
import { bytesFlyForward } from '../types/flyEventsTypes.js';
import { bytesFlyBackward } from '../types/flyEventsTypes.js';
import { bytesFlyUp } from '../types/flyEventsTypes.js';
import { bytesFlyDown } from '../types/flyEventsTypes.js';
import { bytesFlyLeft } from '../types/flyEventsTypes.js';
import { bytesFlyRight } from '../types/flyEventsTypes.js';

export default class Go extends Command {
  constructor(direction){
      var packagesFly = [bytesFlyForward, bytesFlyBackward,
            bytesFlyUp, bytesFlyDown, bytesFlyLeft, bytesFlyRight];
      super(packagesFly, '');
      this.direction = direction;
  }

  async run(){
    switch(this.direction){
      case global.FORWARD:
        await Code.writeCharacteristic.writeValue(this.package[0]);
      break;
      case global.BACKWARD:
        await Code.writeCharacteristic.writeValue(this.package[1]);
      break;
      case global.UP:
        await Code.writeCharacteristic.writeValue(this.package[2]);
      break;
      case global.DOWN:
        await Code.writeCharacteristic.writeValue(this.package[3]);
      break;
      case global.LEFT:
        await Code.writeCharacteristic.writeValue(this.package[4]);
      break;
      case global.RIGHT:
        await Code.writeCharacteristic.writeValue(this.package[5]);
      break;
    }
  }
}
