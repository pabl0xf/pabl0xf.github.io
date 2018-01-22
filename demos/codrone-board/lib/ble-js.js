import '../constants/consts.js';
import bytesLedPackage from '../types/ledTypes.js';
import bytesTakeOff from '../types/flyEventsTypes.js';

var packages = {
  'bytesLedPackage': bytesLedPackage,
  'bytesTakeOff': bytesTakeOff
}

function getBytesFromType(type) {
    return packages[type][type];
}

global.takeOff = function (){
  var takeOffPackage = getBytesFromType('bytesTakeOff');
  Code.device.getPrimaryService(PRIMARY_SERVICE)
  .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
   return characteristic.writeValue(takeOffPackage);
  })
}

global.setArmColor = function (type) {
  var ledPackage = getBytesFromType('bytesLedPackage');
  ledPackage[2] = COLORS[type];
  Code.device.getPrimaryService(PRIMARY_SERVICE)
  .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
     return characteristic.writeValue(ledPackage);
  })
}

global.setLEDMode = function (type) {
  var ledPackage = getBytesFromType('bytesLedPackage');
  ledPackage[1] = BLINKING.armCode;
  Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
     return characteristic.writeValue(ledPackage);
  })
  setInterval(function(){

    ledPackage[1] = BLINKING.eyeCode;
    Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
    .then(characteristic => {
       return characteristic.writeValue(ledPackage);
    })

  }.bind(this), 2000);

}
