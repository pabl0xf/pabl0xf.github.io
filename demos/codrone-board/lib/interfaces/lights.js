import {  commandManager } from '../commandManager.js';
import SetArmColor from '../commands/setArmColor.js';
import SetEyeColor from '../commands/setEyeColor.js';
import { dataLedMode } from '../model/data.js';

//this.data = {ledMode: dataLedMode};

// var packages = {
//   'bytesLedPackage': bytesLedPackage,
//   'bytesResetLedPackage': bytesResetLedPackage
// }


function getBytesFromType(type) {
    return packages[type];
}

global.setArmRGB = async function (rValue, gValue, bValue) {

  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(async function(resolve, reject) {
    var setArmColor = new SetArmColor(rValue, gValue, bValue);
    await setArmColor.run();
    resolve();
    return;
  });

  return promiseCommand;
  // var ledPackage = getBytesFromType('bytesLedPackage');
  // ledPackage[1] = this.data.ledMode.arms;
  // ledPackage[2] = COLORS[type];
  // Code.device.getPrimaryService(PRIMARY_SERVICE)
  // .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  // .then(characteristic => {
  //    return characteristic.writeValue(ledPackage);
  // })
}.bind(this);

global.setEyeRGB = async function (rValue, gValue, bValue) {

  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(async function(resolve, reject) {
    var setEyeColor = new SetEyeColor(rValue, gValue, bValue);
    await setEyeColor.run();
    resolve();
    return;
  });

  return promiseCommand;

}.bind(this);

// global.setLEDto = function (type) {
//   var ledPackage = getBytesFromType('bytesLedPackage');
//   ledPackage[1] = this.data.ledMode.arms;
//   ledPackage[2] = COLORS[type];
//   Code.device.getPrimaryService(PRIMARY_SERVICE)
//   .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
//   .then(characteristic => {
//      characteristic.writeValue(ledPackage).then(_ => {
//        ledPackage[1] = this.data.ledMode.eye;
//        ledPackage[2] = COLORS[type];
//        Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
//        .then(characteristic => {
//           return characteristic.writeValue(ledPackage);
//        })
//      })
//   })
// }.bind(this);
//
// global.setLEDMode = function (type) {
//   var ledModePackage = getBytesFromType('bytesLedPackage');
//   ledModePackage[1] = type.armCode;
//   this.data.ledMode.arms = type.armCode
//   Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
//   .then(characteristic => {
//      characteristic.writeValue(ledModePackage).then(_ => {
//        ledModePackage[1] = type.eyeCode;
//        this.data.ledMode.eye = type.eyeCode;
//        Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
//        .then(characteristic => {
//           return characteristic.writeValue(ledModePackage);
//        })
//      })
//   })
// }.bind(this);
//
// global.resetLED = function () {
//   var resetEyePackage = getBytesFromType('bytesResetLedPackage');
//   Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
//   .then(characteristic => {
//      characteristic.writeValue(resetEyePackage.arms).then(_ => {
//        Code.device.getPrimaryService(PRIMARY_SERVICE).then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
//        .then(characteristic => {
//           return characteristic.writeValue(resetEyePackage.eye);
//        })
//      })
//   })
// }.bind(this);
//
// global.setArmRGB = function (red, green, blue) {
//   alert('red:'+ red + ' green:'+ green + ' blue:'+ blue)
// }.bind(this);
//
// global.setEyeRGB = function (red, green, blue) {
//   alert('red:'+ red + ' green:'+ green + ' blue:'+ blue)
// }.bind(this);
