import '../constants/consts.js';
import { bytesLedPackage, bytesResetLedPackage } from '../types/ledTypes.js';
import { dataLedMode } from '../model/ledData.js';
import { bytesTakeOff } from '../types/flyEventsTypes.js';
import { bytesRotate180 } from '../types/flyEventsTypes.js';
import { sensorBattery } from '../types/sensorTypes.js';

this.data = {ledMode: dataLedMode};

var packages = {
  'bytesLedPackage': bytesLedPackage,
  'bytesResetLedPackage': bytesResetLedPackage,
  'bytesTakeOff': bytesTakeOff,
  'bytesRotate180': bytesRotate180,
  'sensorBattery': sensorBattery
}

global.executionInProgress = false;
global.bleCommand = [];

function getBytesFromType(type) {
    return packages[type];
}

var execute = async function(packageData, readValue){

  if(global.executionInProgress){
    bleCommand.push({package: packageData, readValue: readValue});
    return;
  }

  global.executionInProgress  = true;
  const service = await Code.device.getPrimaryService(PRIMARY_SERVICE);

  console.log('Getting Write Characteristic...');
  let characteristic = await service.getCharacteristic(WRITE_CHARACTERISTIC);

  console.log('Writing takeOff package...');

  await characteristic.writeValue(packageData);

  // READ VALUE
  if(readValue){
      console.log('Getting Battery Level Characteristic...');
      characteristic = await service.getCharacteristic(NOTIIFY_CHARACTERISTIC);

      console.log('Reading Battery Level...');
      const value = await characteristic.readValue();

      var arrayResult = new Uint8Array(value.buffer);
      console.log('Battery percentage is ' + arrayResult);
      $('#testSensorBatteryLabel').show();
      let batteryPorcentageValue = arrayResult[7] & 0xFF;
      $('#batteryPercentageValue').html(batteryPorcentageValue);
      var event = new CustomEvent('batteryPorcentage', { detail: batteryPorcentageValue });
      dispatchEvent(event);
  }

  // END READ VALUE

  global.executionInProgress  = false;
  if(bleCommand && bleCommand.length>0){
    let command = bleCommand.pop();
    execute(command.package, command.readValue);
  }
}

global.takeOff = function (){
  var takeOffPackage = getBytesFromType('bytesTakeOff');
  execute(takeOffPackage);
}

global.rotate180 = function(){
  var rotate180Package = getBytesFromType('bytesRotate180');
  execute(rotate180Package);
}

global.land = function (){
  alert('land');
}.bind(this);

//eval('(async function(){battery = await window.getBatteryPercentage2(); alert(battery)})()')

global.getBatteryPercentage = async function (){
  try {
    var sensorBatteryPackage = getBytesFromType('sensorBattery');
    var batteryValue = await new Promise(function(resolve, reject) {
          execute(sensorBatteryPackage, true);
          addEventListener('batteryPorcentage', function (e) {
            resolve(e.detail);
           }, false);
     });
     return batteryValue;
   } catch(error) {
    log('Argh! ' + error);
   }

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
