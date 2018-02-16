import '../constants/consts.js';
import { bytesLedPackage, bytesResetLedPackage } from '../types/ledTypes.js';
import { dataLedMode } from '../model/ledData.js';
import { bytesTakeOff } from '../types/flyEventsTypes.js';

this.data = {ledMode: dataLedMode};

var packages = {
  'bytesLedPackage': bytesLedPackage,
  'bytesResetLedPackage': bytesResetLedPackage,
  'bytesTakeOff': bytesTakeOff
}


function getBytesFromType(type) {
    return packages[type];
}

global.takeOff = function (){
  alert('takeOff');
  var takeOffPackage = getBytesFromType('bytesTakeOff');
  Code.device.getPrimaryService(PRIMARY_SERVICE)
  .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
   return characteristic.writeValue(takeOffPackage);
  })
}.bind(this);

global.land = function (){
  alert('land');
}.bind(this);

global.getBatteryPercentage = function (){
   var dataArray = new Uint8Array(3);
   dataArray[0] = 17;
   dataArray[1] = 144;
   dataArray[2] = 49;
  Code.device.getPrimaryService(PRIMARY_SERVICE)
  .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
   return characteristic.writeValue(dataArray);
  })
}.bind(this);

global.setArmColor = function (type) {
  var ledPackage = getBytesFromType('bytesLedPackage');
  ledPackage[1] = this.data.ledMode.arms;
  ledPackage[2] = COLORS[type];
  Code.device.getPrimaryService(PRIMARY_SERVICE)
  .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
     return characteristic.writeValue(ledPackage);
  })
}.bind(this);

global.setLEDto = function (type) {
  var ledPackage = getBytesFromType('bytesLedPackage');
  ledPackage[1] = this.data.ledMode.arms;
  ledPackage[2] = COLORS[type];
  Code.device.getPrimaryService(PRIMARY_SERVICE)
  .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
     characteristic.writeValue(ledPackage).then(_ => {
       ledPackage[1] = this.data.ledMode.eye;
       ledPackage[2] = COLORS[type];
       Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
       .then(characteristic => {
          return characteristic.writeValue(ledPackage);
       })
     })
  })
}.bind(this);

global.setLEDMode = function (type) {
  var ledModePackage = getBytesFromType('bytesLedPackage');
  ledModePackage[1] = type.armCode;
  this.data.ledMode.arms = type.armCode
  Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
     characteristic.writeValue(ledModePackage).then(_ => {
       ledModePackage[1] = type.eyeCode;
       this.data.ledMode.eye = type.eyeCode;
       Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
       .then(characteristic => {
          return characteristic.writeValue(ledModePackage);
       })
     })
  })
}.bind(this);

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
}.bind(this);

global.setArmRGB = function (red, green, blue) {
  alert('red:'+ red + ' green:'+ green + ' blue:'+ blue)
}.bind(this);

global.setEyeRGB = function (red, green, blue) {
  alert('red:'+ red + ' green:'+ green + ' blue:'+ blue)
}.bind(this);
