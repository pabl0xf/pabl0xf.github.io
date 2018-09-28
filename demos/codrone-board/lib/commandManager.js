import dynamicClass from "./factoryHelper.js";

class CommandManager {
  constructor() {
    this.stack = [];
    this.commandConsummerOn = false;
    this.runningCommand = false;
    this.inProgress = false;
    this.commandLoop = null;
  }

  addCommand(command) {
    this.stack.push(command);
  }

  async runFromStackOnly(command){
    if(this.runningCommand){
      return;
    }
    this.runningCommand = true;
    if (this.stack && this.stack.length > 0) {
      var commandOnStack = this.stack.shift();

      var className = commandOnStack.charAt(0).toUpperCase() + commandOnStack.slice(1);
      const instanceSensor = dynamicClass(className);

      var commandToRun  = new instanceSensor();

      console.log('display command to run.......', commandToRun);
      var response = commandToRun.getValue();
      commandToRun.run();
      var value = await response;
      if(commandOnStack === global.Sensors.GET_GYRO_ANGLES.value){
        try {
          value = JSON.stringify(value);
        }
        catch(e){
          console.log('can not stringify value', e);
        }
      }
      global.displayValue[commandOnStack] = value;
    }
      this.runningCommand = false;
  }

  async runCommand(command) {
    if (this.stack && this.stack.length > 0) {
      var commandOnStack = this.stack.pop();
      var className = commandOnStack.charAt(0).toUpperCase() + commandOnStack.slice(1);
      const instanceSensor = dynamicClass(className);

      var commandToRun  = new instanceSensor();

      console.log('display command to run.......', commandToRun);
      var response = commandToRun.getValue();
      commandToRun.run();
      var value = await response;
      if(commandOnStack === global.Sensors.GET_GYRO_ANGLES.value){
        try {
          value = JSON.stringify(value);
        }
        catch(e){
          console.log('can not stringify value', e);
        }
      }
      global.displayValue[commandOnStack] = value;
    }
    if (command) {
      return command.run();
    }
  }

  cleanStack() {
    this.stack = [];
  }
}

export let commandManager = new CommandManager();
