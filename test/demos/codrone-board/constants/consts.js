global.PRIMARY_SERVICE = 'c320df00-7891-11e5-8bcf-feff819cdc9f';
global.WRITE_CHARACTERISTIC = 'c320df02-7891-11e5-8bcf-feff819cdc9f';
global.NOTIIFY_CHARACTERISTIC = 'c320df01-7891-11e5-8bcf-feff819cdc9f';

global.HOLD = {armCode: 0x41, eyeCode: 0x11};
global.OFF = {armCode: 0x40, eyeCode: 0x10};
global.BLINKING = {armCode: 0x43, eyeCode: 0x13};
global.DOUBLE_BLINK = {armCode: 0x44, eyeCode: 0x14};
global.PULSING = {armCode: 0x45, eyeCode: 0x15};
global.FLOW = {armCode: 0x46, eyeCode: 0x16};
global.REVERSE_FLOW = {armCode: 0x47, eyeCode: 0x17};
global.MIX = {armCode: 0x42, eyeCode: 0x12};
global.keyPressMap = {};
global.keydownCallback = null;

global.RED = 'Red';
global.YELLOW = 'Yellow';
global.ENTER = 'Yellow';
global.ORANGE = 'Orange';
global.GREEN = 'Green';
global.BLUE = 'Blue';
global.INDIGO = 'Indigo';
global.VIOLET = 'Violet';

global.TAKEOFF = 1;
global.CRASH = 2;
global.UPSIDE_DOWN = 3;
global.LOW_BATTERY = 'LowBattery';


global.LEFT = -1; // -1
global.RIGHT = 1; // 1
global.BACKWARD = 2;
global.FORWARD = 3;
global.UP = 4;
global.DOWN = 5;

global.DEGREE = {
  'DEGREE.ANGLE_30' : 30,
  'DEGREE.ANGLE_45' : 45,
  'DEGREE.ANGLE_60' : 60,
  'DEGREE.ANGLE_90' : 90,
  'DEGREE.ANGLE_120' : 120,
  'DEGREE.ANGLE_135' : 135,
  'DEGREE.ANGLE_150' : 150,
  'DEGREE.ANGLE_180' : 180,
  'DEGREE.ANGLE_210' : 210,
  'DEGREE.ANGLE_225' : 225,
  'DEGREE.ANGLE_240' : 240,
  'DEGREE.ANGLE_270' : 270,
  'DEGREE.ANGLE_300' : 300,
  'DEGREE.ANGLE_315' : 315,
  'DEGREE.ANGLE_330' : 330
};

global.BACKSPACE = 8;
global.ENTER = 13;

global.SUFFIX_JUNIOR = '_junior';
global.SUFFIX_SENIOR = '_senior';
global.PREFIX_EVENTS = 'on';

global.KEYPRESS_EVENT =  'whenKeyPress';

global.COLORS = {
	Blue : 9,
	Green : 51,
  Indigo : 56,
	Orange : 99,
	Red : 114,
	Violet : 135,
  Yellow : 139
};
