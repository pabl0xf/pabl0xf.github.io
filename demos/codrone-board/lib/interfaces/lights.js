import {  commandManager } from '../commandManager.js';
import SetArmColor from '../commands/setArmColor.js';
import SetEyeColor from '../commands/setEyeColor.js';
import SetArmMode from '../commands/setArmMode.js';
import SetEyeMode from '../commands/setEyeMode.js';
import { dataLedMode } from '../model/data.js';


function getBytesFromType(type) {
    return packages[type];
}

global.setArmLED = async function (rValue, gValue, bValue, mode, interval) {

  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(async function(resolve, reject) {
    var setArmColor = new SetArmColor(rValue, gValue, bValue, mode + 0x30, interval);
    await setArmColor.run();
    resolve();
    return;
  });

  return promiseCommand;

}.bind(this);

global.setArmMode = async function (mode) {

  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(async function(resolve, reject) {
  var arMode = new SetArmMode(mode);
    await arMode.run();
    resolve();
    return;
  });

  return promiseCommand;
}.bind(this);

global.setEyeMode = async function (mode) {

  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(async function(resolve, reject) {
    var eyeMode = new SetEyeMode(mode);
    await eyeMode.run();
    resolve();
    return;
  });

  return promiseCommand;
}.bind(this);

global.setAllLED = async function (red, green, blue, mode, interval) {

  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(async function(resolve, reject) {
    await global.setArmLED(red, green, blue, mode, interval);
    await global.setEyeLED(red, green, blue, mode, interval);

    resolve();
    return;
  });

  return promiseCommand;
}.bind(this);

global.setEyeLED = async function (rValue, gValue, bValue, mode, interval) {

  if (!global.RUNNING){
    return;
  }

  var promiseCommand = new Promise(async function(resolve, reject) {
    var setEyeColor = new SetEyeColor(rValue, gValue, bValue, mode, interval);
    await setEyeColor.run();
    resolve();
    return;
  });

  return promiseCommand;

}.bind(this);
