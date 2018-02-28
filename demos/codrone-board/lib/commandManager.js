var stackManager = {};

stackManager.executionInProgress = false;

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
      if(this.stack && this.stack.length>0){
        let command = this.stack.shift();
        console.log('command pop');
        this.execute(command);
      }
    }.bind(this), 10);
  }

  async execute (command){
    console.log('execution start');
    this.executionInProgress = true;
    await command.run();
    this.executionInProgress = false;
    return;
  }
}

export let commandManager =  new CommandManager();
