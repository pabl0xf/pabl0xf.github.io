import {
  commandManager
} from '../commandManager.js';
import Move from '../commands/move.js';
import TakeOff from '../commands/takeOff.js';
import Go from '../commands/go.js';
import Hover from '../commands/hover.js';
import Rotate180 from '../commands/rotate180.js';
import Land from '../commands/land.js';
import EmergencyStop from '../commands/emergencyStop.js';
import { flyVariables } from '../model/data.js';

var flightInteface = {};


global.stopExecution = function(skipForceLanding) {
  global.RUNNING = false;
  global.loopInProgress = false;

  if (Code.device != null && !skipForceLanding) {
    setTimeout(async function() {
      var emergencyStop = new EmergencyStop();
      return emergencyStop.run();
    }.bind(this), 100);
  }
}

global.takeOff = async function() {
  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(async function(resolve, reject) {
    var takeOff = new TakeOff();
    await takeOff.run();
    setTimeout(async function() {
      console.log('------------ En take off 3 sec');
      resolve();
      return;
    }.bind(this), 3000);
  });
  return promiseCommand;
}

global.rotate180 = async function() {
  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(async function(resolve, reject) {
    var rotate180 = new Rotate180();
    await rotate180.run();
    resolve();
    return;
  });

  return promiseCommand;
}

global.land = async function() {
  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(async function(resolve, reject) {
    var land = new Land();
    await land.run();
    resolve();
  });
  return promiseCommand;
}

global.emergencyStop = async function() {
  if (!global.RUNNING){
    return;
  }
    var emergencyStop = new EmergencyStop();
    return emergencyStop.run();
}

global.hover = async function(seconds) {
  var promiseCommand = new Promise(function(resolve, reject) {
    global.loopInProgress = false;
    flightInteface.hoverLoop = async function(){

       var hoverCommand = new Hover();
       await hoverCommand.run();

      if(global.loopInProgress){
        flightInteface.hoverLoop()
      }
      else{
        resolve();
        return;
      }

    }

    global.loopInProgress = true;

    setTimeout(function() {
      global.loopInProgress = false;
    }.bind(this), seconds * 1000);

    flightInteface.hoverLoop();

  });

  return promiseCommand;
}

global.go = function(direction, seconds, power) {

  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(function(resolve, reject) {
    global.loopInProgress = false;
    flightInteface.goLoop = async function(){

       var goCommand = new Go(direction, power);
       await goCommand.run();

      if(global.loopInProgress){
        flightInteface.goLoop();
      }
      else{
        await global.hover(1);
        resolve();
        return;
      }

    }

    global.loopInProgress = true;

    setTimeout(function() {
      global.loopInProgress = false;

    }.bind(this), seconds * 1000);

    flightInteface.goLoop();


  });

    return promiseCommand;

}

global.moveInternal = async function(roll, pitch, yaw, throttle) {
    if (!global.RUNNING){
      return;
    }

    var moveCommand = new Move(roll, pitch, yaw, throttle);
    return moveCommand.run();
}

global.move = async function(seconds, roll, pitch, yaw, throttle) {
    if (!global.RUNNING){
      return;
    }

    if(seconds && !roll && !pitch && !yaw && !throttle){
       roll = flyVariables.roll;
       pitch = flyVariables.pitch;
       yaw = flyVariables.yaw;
       throttle = flyVariables.throttle;
    }
    else if(!seconds && !roll && !pitch && !yaw && !throttle){
      return moveInternal(flyVariables.roll, flyVariables.pitch, flyVariables.yaw, flyVariables.throttle);
    }


    var promiseCommand = new Promise(function(resolve, reject) {
      global.loopInProgress = false;
      flightInteface.moveLoop = async function(){

         var moveCommand = new Move(roll, pitch, yaw, throttle);
         await moveCommand.run();

        if(global.loopInProgress){
          flightInteface.moveLoop()
        }
        else{
          await global.hover(1);
          resolve();
          return;
        }

      }

      global.loopInProgress = true;

      setTimeout(function() {
        global.loopInProgress = false;
      }.bind(this), seconds * 1000);

      flightInteface.moveLoop();

    });

    return promiseCommand;
}

global.turnDegree = async function(direction, degree) {

  if (!global.RUNNING){
    return;
  }

  var angle = await getGyroAngles();

  var speed = direction * 15;

  var dest = 360 + angle.yawDegree + parseInt(degree) * direction;

  var min = (dest - 5) % 360;

  var max = (dest + 5) % 360;

  var promiseCommand = new Promise(function(resolve, reject) {

  global.loopInProgress = true;

  flightInteface.adjustDegree = async function (){
     var angle = await getGyroAngles();
     console.log('Adjust Value is ', angle.yawDegree);


     if (min > max) {
       if (min < angle.yawDegree || max > angle.yawDegree) {
         await global.hover(1);
         console.log('---- Running command: Ending turn', angle.yawDegree);
         global.loopInProgress = false;
         resolve();
         return;

       }
     } else {
         if (min < angle.yawDegree && max > angle.yawDegree) {
           await global.hover(1);
           console.log('---- Running command: Ending turn2', angle.yawDegree);
           global.loopInProgress = false;
           resolve();
           return;
         }
      }

         await moveInternal(0, 0, speed, 0);

         if(global.loopInProgress){
            flightInteface.adjustDegree();
         }

    }.bind(this);

    flightInteface.adjustDegree();

  });

  return promiseCommand;
}

global.turn = function(direction, seconds, power) {

  var speed = direction * power;

  var promiseCommand = new Promise(function(resolve, reject) {
    global.loopInProgress = false;
    flightInteface.turnLoop = async function(){

       await moveInternal(0, 0, speed, 0);

      if(global.loopInProgress){
        flightInteface.turnLoop()
      }
      else{
        await hover(1);
        resolve();
        return;
      }

    }

    global.loopInProgress = true;

    setTimeout(function() {
      global.loopInProgress = false;
    }.bind(this), seconds * 1000);

    flightInteface.turnLoop();

  });

  return promiseCommand;
}

global.goToHeight = function(heightSet) {

  var promiseCommand = new Promise(function(resolve, reject) {

    global.loopInProgress = true;

    flightInteface.adjustHeight = async function (){
       var height = await getHeight();
       console.log('Current height is ', height);

       if(height < heightSet - 100)
  			 await moveInternal(0,0,0,20);
  		 else if(height > heightSet + 100)
  			 await moveInternal(0,0,0,-20);
  		 else if( height > heightSet-100 || height < heightSet+ 100){
  			 await hover(0.5);
  			 global.loopInProgress = false;
         resolve();
         return;
  	  	}


       if(global.loopInProgress){
          flightInteface.adjustHeight();
       }

      }.bind(this);

      flightInteface.adjustHeight();

  });

  return promiseCommand;
}

global.removeFlightIntervals = function() {
  clearInterval(flightInteface.moveIntevalId);
  clearInterval(flightInteface.goToHeightIntevalId);
  clearInterval(flightInteface.intervalId);
}
