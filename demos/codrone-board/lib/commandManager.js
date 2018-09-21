class CommandManager {
  constructor() {
    this.stack = [];
    this.commandConsummerOn = false;
    this.inProgress = false;
    this.commandLoop = null;
  }

  addCommand(command) {
    this.stack.push(command);
  }

  async runCommand(command) {
    if (this.stack && this.stack.length > 0) {
      var commandOnStack = this.stack.pop();
      global.displayValue[commandOnStack  ] = await window[commandOnStack]();
    }
    if (command) {
      return command.run();
    }
  }

  restartCommandConsumer() {
    this.commandConsummerOn = false;
    this.cleanStack();
    clearInterval(this.commandLoop);
    this.initCommandConsumer();
  }

  cleanStack() {
    this.stack = [];
  }
}

export let commandManager = new CommandManager();
