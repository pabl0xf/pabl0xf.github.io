import '../../constants/consts.js';
var EventLib = {};
EventLib.lowBatteryCallback = null;
const batteryLowLevelValue = 20;

global.onKeyPressEvent = function(keyCode, callback){
  global.keyPressMap[keyCode] =  {callback: callback};
  if(EventLib.keydownCallback){
    return;
  }
  EventLib.AddKeyPressEvent (callback);
};

global.onEvent = function(eventType, callback){
  switch (eventType) {
   case LOW_BATTERY:
     EventLib.lowBatteryCallback = callback;
     global.LowBatteryLoop = setInterval(async function(){
       console.log('start iteration: ');
       var batteryPorcentage = await global.getBatteryPercentage();
       if(EventLib.lowBatteryCallback && batteryPorcentage<batteryLowLevelValue) {
         EventLib.lowBatteryCallback();
         clearInterval(global.LowBatteryLoop);
         EventLib.lowBatteryCallback = null;
       }
       console.log('end iteration: ');
     }.bind(this), 1500);
          break;
   }
};

global.removeAllEventListener = function (){
  if(EventLib.keydownCallback) {
    removeEventListener('keydown', EventLib.keydownCallback);
    global.keyPressMap = {};
    EventLib.keydownCallback = null;
  }
  if(global.LowBatteryLoop){
    EventLib.lowBatteryCallback = null;
    clearInterval(global.LowBatteryLoop);
  }
}

EventLib.AddKeyPressEvent = function (callback){
  EventLib.keydownCallback = function(e){
      if (keyPressMap && keyPressMap[e.keyCode]){
        try {
          keyPressMap[e.keyCode].callback();
        } catch (e) {
          alert(MSG['badCode'].replace('%1', e));
        }
      }
  };
  global.addEventListener("keydown", EventLib.keydownCallback);
}
