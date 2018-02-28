export default class Command {
  constructor(packageData, eventName){
      this.package = packageData;
      this.eventName = eventName;
  }

  async run(){
    console.log(this.package);
  }
}
