var takeOff = function(){
  Code.device.getPrimaryService('c320df00-7891-11e5-8bcf-feff819cdc9f')
  .then(service => service.getCharacteristic('c320df02-7891-11e5-8bcf-feff819cdc9f'))
  .then(characteristic => {
   var uint8 = new Uint8Array(3);
   uint8[0] = 17;
   uint8[1] = 34;
   uint8[2] = 1;
   return characteristic.writeValue(uint8);
  })
}