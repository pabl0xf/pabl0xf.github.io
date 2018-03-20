import Command from './command.js';
import { bytesTakeOff } from '../types/flyEventsTypes.js';

export default class Go extends Command {
  constructor(direction){
      var packageTakeoff = bytesTakeOff;
      super(packageTakeoff, '');
      this.direction = direction;
  }

  async run(){
    switch(this.direction){
      case global.FORWARD:
        var dataArray = new Uint8Array(5);
        dataArray[0] = 16;
        dataArray[1] = 0;
        dataArray[2] = 50;
        dataArray[3] = 0;
        dataArray[4] = 0;
        await Code.writeCharacteristic.writeValue(dataArray);
      break;
      case global.BACKWARD:
        var dataArray = new Uint8Array(5);
        dataArray[0] = 16;
        dataArray[1] = 0;
        dataArray[2] = -50;
        dataArray[3] = 0;
        dataArray[4] = 0;
        await Code.writeCharacteristic.writeValue(dataArray);
      break;
    }
  }
}
