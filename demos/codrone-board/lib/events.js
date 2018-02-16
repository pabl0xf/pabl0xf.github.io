import '../constants/consts.js';
var EventLib = {};

global.onKeyPressEvent = function(keyCode, callback){
  global.keyPressMap[keyCode] =  {callback: callback};
  if(EventLib.keydownCallback){
    return;
  }
  EventLib.AddKeyPressEvent (callback);
};

global.onEvent = function(eventType, callback){

  Code.device.getPrimaryService(PRIMARY_SERVICE)
  .then(service => {
  // Getting Battery Level Characteristic...
     return service.getCharacteristic('c320df01-7891-11e5-8bcf-feff819cdc9f');
   })
  .then(characteristic => {
    // Reading Battery Level...
    return characteristic.readValue();
  })
  .then(value => {
    console.log('Battery percentage is ' + value.getUint8(0));
  })

return;

//   Code.device.getPrimaryService(PRIMARY_SERVICE)
//   .then(service => {
//   // Getting Battery Level Characteristic...
//      return service.getCharacteristic('c320df01-7891-11e5-8bcf-feff819cdc9f');
//    })
// .then(characteristic => characteristic.startNotifications())
// .then(characteristic => {
//   characteristic.addEventListener('characteristicvaluechanged',
//                                   handleCharacteristicValueChanged);
//   console.log('Notifications have been started.');
// })
// .catch(error => { console.log(error); });
//
// function handleCharacteristicValueChanged(event) {
//   var value = event.target.value;
//   console.log('Received ' + value);
//   // TODO: Parse Heart Rate Measurement value.
//   // See https://github.com/WebBluetoothCG/demos/blob/gh-pages/heart-rate-sensor/heartRateSensor.js
// }


return;
  global.keyPressMap[keyCode] =  {callback: callback};
  if(EventLib.keydownCallback){
    return;
  }
  EventLib.AddKeyPressEvent (callback);
};

global.removeAllEventListener = function (){
  if(EventLib.keydownCallback) {
    removeEventListener('keydown', EventLib.keydownCallback);
    global.keyPressMap = {};
    EventLib.keydownCallback = null;
    //keyEventsArray = {};
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
