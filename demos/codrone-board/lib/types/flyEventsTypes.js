var dataArray = new Uint8Array(3);
dataArray[0] = 17;
dataArray[1] = 34;
dataArray[2] = 1;
exports.bytesTakeOff = dataArray;

var dataArray = new Uint8Array(3);
dataArray[0] = 17;
dataArray[1] = 34;
dataArray[2] = 5;
exports.bytesLand = dataArray;

var dataArray = new Uint8Array(3);
dataArray[0] = 17;
dataArray[1] = 36;
dataArray[2] = 0;
exports.bytesEmergencyStop = dataArray;

var dataArray = new Uint8Array(3);
dataArray[0] = 17;
dataArray[1] = 34;
dataArray[2] = 14;
exports.bytesRotate180 = dataArray;

var dataArray = new Uint8Array(5);
dataArray[0] = 16;
dataArray[1] = 0;
dataArray[2] = 50;
dataArray[3] = 0;
dataArray[4] = 0;
exports.bytesFlyForward = dataArray;

var dataArray = new Uint8Array(5);
dataArray[0] = 16;
dataArray[1] = 0;
dataArray[2] = -50;
dataArray[3] = 0;
dataArray[4] = 0;
exports.bytesFlyBackward = dataArray;

var dataArray = new Uint8Array(5);
dataArray[0] = 16;
dataArray[1] = 0;
dataArray[2] = 0;
dataArray[3] = 0;
dataArray[4] = 50;
exports.bytesFlyUp = dataArray;

var dataArray = new Uint8Array(5);
dataArray[0] = 16;
dataArray[1] = 0;
dataArray[2] = 0;
dataArray[3] = 0;
dataArray[4] = -50;
exports.bytesFlyDown = dataArray;

var dataArray = new Uint8Array(5);
dataArray[0] = 16;
dataArray[1] = 50;
dataArray[2] = 0;
dataArray[3] = 0;
dataArray[4] = 0;
exports.bytesFlyRight = dataArray;

var dataArrayLeft = new Uint8Array(5);
dataArray[0] = 16;
dataArray[1] = -50;
dataArray[2] = 0;
dataArray[3] = 0;
dataArray[4] = 0;
exports.bytesFlyLeft = dataArrayLeft;

var dataArray = new Uint8Array(5);
dataArray[0] = 16;
dataArray[1] = 0;
dataArray[2] = 0;
dataArray[3] = 0;
dataArray[4] = 0;
exports.bytesHover = dataArray;
