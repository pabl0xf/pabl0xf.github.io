import '../constants/consts.js';
import { bytesLedPackage, bytesResetLedPackage } from '../types/ledTypes.js';
import { bytesTakeOff } from '../types/flyEventsTypes.js';

var packages = {
  'bytesLedPackage': bytesLedPackage,
  'bytesResetLedPackage': bytesResetLedPackage,
  'bytesTakeOff': bytesTakeOff
}

function getBytesFromType(type) {
    return packages[type];
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

global.setLEDto = function (type) {
  var ledPackage = getBytesFromType('bytesLedPackage');
  ledPackage[2] = COLORS[type];
  Code.device.getPrimaryService(PRIMARY_SERVICE)
  .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
     characteristic.writeValue(ledPackage).then(_ => {
       ledPackage[1] = HOLD.eyeCode;
       ledPackage[2] = COLORS[type];
       Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
       .then(characteristic => {
          return characteristic.writeValue(ledPackage);
       })
     })
  })
}

global.setLEDMode = function (type) {
  var resetPackage = getBytesFromType('bytesLedPackage');
  ledPackage[1] = type.armCode;
  Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
     characteristic.writeValue(ledPackage).then(_ => {
       ledPackage[1] = type.eyeCode;
       Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
       .then(characteristic => {
          return characteristic.writeValue(ledPackage);
       })
     })
  })
}

global.resetLED = function () {
  var resetEyePackage = getBytesFromType('bytesResetLedPackage');
  Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
     characteristic.writeValue(resetEyePackage.arms).then(_ => {
       Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
       .then(characteristic => {
          return characteristic.writeValue(resetEyePackage.eye);
       })
     })
  })
}
