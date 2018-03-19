import Command from './command.js';
import { bytesTakeOff } from '../types/flyEventsTypes.js';

export default class Go extends Command {
  constructor(direction, seconds){
      var packageTakeoff = bytesTakeOff;
      super(packageTakeoff, '');
      this.direction = direction;
      this.seconds = seconds;
      this.intevalId = null;
  }

  async run(){

    this.intevalId = setInterval(function() {
        // Your code here
        console.log(this.direction);
        console.log(this.seconds);
    }.bind(this), 10);

    //Stop the functions after 1 minute.
      setTimeout(function() {
        clearInterval(this.intevalId);
      }.bind(this), this.seconds * 1000);


    // this.intervalId = setInterval(async function(){
    //
    // }.bind(this), this.seconds * 1000);
    //await Code.writeCharacteristic.writeValue(this.package);
  }
}
