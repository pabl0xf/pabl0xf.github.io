var takeOff = function (){
  Code.device.getPrimaryService(PRIMARY_SERVICE)
  .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
   var uint8 = new Uint8Array(3);
   uint8[0] = 17;
   uint8[1] = 34;
   uint8[2] = 1;
   return characteristic.writeValue(uint8);
  })
}

var setArmColor = function (type) {
  var setLedColorPackage = getBytesFromType(type);
  Code.device.getPrimaryService(PRIMARY_SERVICE)
  .then(service => service.getCharacteristic(WRITE_CHARACTERISTIC))
  .then(characteristic => {
     return characteristic.writeValue(setLedColorPackage);
  })
}
