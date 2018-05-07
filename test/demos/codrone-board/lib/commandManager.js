class CommandManager {
  constructor() {
    this.stack = [];
    this.commandConsummerOn = false;
    this.inProgress = false
    this.commandLoop = null;
  }

  addCommand(command){
    this.stack.push(command);
  }

  initCommandConsumer(){
    this.commandConsummerOn = true;
    this.commandLoop = setInterval(function(){
      if(this.executionInProgress){
        return true;
      }
      if(this.stack && this.stack.length>0 && this.commandConsummerOn){
        let command = this.stack.shift();
        this.execute(command);
      }
    }.bind(this), 10);
  }

  restartCommandConsumer(){
    this.commandConsummerOn= false;
    this.cleanStack();
    clearInterval(this.commandLoop);
    this.initCommandConsumer();
  }

  cleanStack(){
    this.stack = [];
  }

  async execute (command){
    this.executionInProgress = true;
    await command.run();
    this.executionInProgress = false;
  }
}

export let commandManager =  new CommandManager();
