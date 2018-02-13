/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_ble_js_js__ = __webpack_require__(2);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_consts_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_consts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__constants_consts_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_ledTypes_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_ledTypes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__types_ledTypes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ledData_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ledData_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__model_ledData_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_flyEventsTypes_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_flyEventsTypes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__types_flyEventsTypes_js__);





this.data = {ledMode: __WEBPACK_IMPORTED_MODULE_2__model_ledData_js__["dataLedMode"]};

var packages = {
  'bytesLedPackage': __WEBPACK_IMPORTED_MODULE_1__types_ledTypes_js__["bytesLedPackage"],
  'bytesResetLedPackage': __WEBPACK_IMPORTED_MODULE_1__types_ledTypes_js__["bytesResetLedPackage"],
  'bytesTakeOff': __WEBPACK_IMPORTED_MODULE_3__types_flyEventsTypes_js__["bytesTakeOff"]
}


function getBytesFromType(type) {
    return packages[type];
}

global.AddkeyPressEvent = function (keyPress){
  document.body.onkeyup = null;
  document.body.onkeyup = function(e){
      if(e.keyCode == keyPress){
        var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
        try {
          var event = new Event('whenKeyPress');
          global.dispatchEvent(event);
        } catch (e) {
          alert(MSG['badCode'].replace('%1', e));
        }
      }
  }
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.PRIMARY_SERVICE = 'c320df00-7891-11e5-8bcf-feff819cdc9f';
global.WRITE_CHARACTERISTIC = 'c320df02-7891-11e5-8bcf-feff819cdc9f';

global.HOLD = {armCode: 0x41, eyeCode: 0x11};
global.OFF = {armCode: 0x40, eyeCode: 0x10};
global.BLINKING = {armCode: 0x43, eyeCode: 0x13};
global.DOUBLE_BLINK = {armCode: 0x44, eyeCode: 0x14};
global.PULSING = {armCode: 0x45, eyeCode: 0x15};
global.FLOW = {armCode: 0x46, eyeCode: 0x16};
global.REVERSE_FLOW = {armCode: 0x47, eyeCode: 0x17};
global.MIX = {armCode: 0x42, eyeCode: 0x12};
global.addEvent = window.addEventListener;

global.RED = 'Red';
global.YELLOW = 'Yellow';
global.ENTER = 'Yellow';
global.ORANGE = 'Orange';
global.GREEN = 'Green';
global.BLUE = 'Blue';
global.INDIGO = 'Indigo';
global.VIOLET = 'Violet';

global.KEY = {BACKSPACE: 8, ENTER: 13};

global.COLORS = {
	Blue : 9,
	Green : 51,
  Indigo : 56,
	Orange : 99,
	Red : 114,
	Violet : 135,
  Yellow : 139
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var dataArray = new Uint8Array(4);
dataArray[0] = 0x20;
dataArray[1] = 0x41;
dataArray[2] = 0x00;
dataArray[3] = 0x15;
exports.bytesLedPackage = dataArray;

var resetEyeArray = new Uint8Array(4);
resetEyeArray[0] = 0x20;
resetEyeArray[1] = 0x11;
resetEyeArray[2] = global.COLORS.Red;
resetEyeArray[3] = 0x15;

var resetArmsArray = new Uint8Array(4);
resetArmsArray[0] = 0x20;
resetArmsArray[1] = 0x41;
resetArmsArray[2] = global.COLORS.Red;
resetArmsArray[3] = 0x15;
exports.bytesResetLedPackage = {eye: resetEyeArray, arms: resetArmsArray};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {let ledMode = {
  'eye': global.HOLD.eyeCode,
  'arms': global.HOLD.armCode,
}

exports.dataLedMode = ledMode;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var dataArray = new Uint8Array(3);
dataArray[0] = 17;
dataArray[1] = 34;
dataArray[2] = 1;
exports.bytesTakeOff = dataArray;


/***/ })
/******/ ]);