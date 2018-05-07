  var bytesLedDimming = new Uint8Array(4);
  bytesLedDimming[0] = 0x20;
  bytesLedDimming[1] = 0x45;
  bytesLedDimming[2] = 0x8B;
  bytesLedDimming[3] = 0x07;

  var bytesYellowDimming = new Uint8Array(4);
  bytesYellowDimming = bytesLedDimming;
  bytesYellowDimming[1] = 0x45;
  bytesYellowDimming[2] = 0x8B;

  var bytesRedDimming = new Uint8Array(4);
  bytesRedDimming = bytesLedDimming;
  bytesRedDimming[1] = 0x45;
  bytesRedDimming[2] = 0x72;


  var packages = {
    typeColorYellow: bytesYellowDimming,
    typeColorRed: bytesRedDimming
  }

  function getBytesFromType(type) {
      return packages[type];
   }
