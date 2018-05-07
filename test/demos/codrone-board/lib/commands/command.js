export default class Command {
  constructor(packageData, eventName){
      this.package = packageData;
      this.eventName = eventName;
  }

  async run(){
    console.log(this.package);
  }

  async sendBLECommand(packageValue){
    console.log('---- Running command: ' + this.eventName);
    try {
      return Code.writeCharacteristic.writeValue(packageValue);
    }
    catch(e){
      console.log('error in command '+ eventName );
      if(e){
        console.log(e);
      }
    }
  }

  async getValue (){
    return new Promise(function(resolve, reject) {
       addEventListener(this.eventName, function (e) {
             resolve(e.detail);
            }, false);
    }.bind(this));
  }
}
