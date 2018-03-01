export default class Command {
  constructor(packageData, eventName){
      this.package = packageData;
      this.eventName = eventName;
  }

  async run(){
    console.log(this.package);
  }

  async getValue (){
    return new Promise(function(resolve, reject) {
           addEventListener(this.eventName, function (e) {
             resolve(e.detail);
            }, false);
    }.bind(this));
  }
}
