//Generic
var sensorType = new Uint8Array(3);
sensorType[0] = 17;
sensorType[1] = 144;

//Set last bit use by different sensors
sensorType[2] = 49;
exports.sensorBattery = sensorType;

sensorType[2] = 50;
exports.sensorAngles = sensorType;

sensorType[2] = 84;
exports.sensorBatteryVoltage = sensorType;

sensorType[2] = 87;
exports.sensorHeight = sensorType;

sensorType[2] = 81;
exports.sensorPressure = sensorType;

sensorType[2] = 80;
exports.sensorAngularSpeed = sensorType;
