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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commandManager; });
var stackManager = {};

stackManager.executionInProgress = false;

class CommandManager {
  constructor() {
    this.stack = [];
    this.commandConsummerOn = false;
    this.inProgress = false
    this.commandLoop = null;
  }

  addCommand(command){
    this.stack.push(command);
  }

  initCommandConsumer(){
    this.commandConsummerOn = true;
    this.commandLoop = setInterval(function(){
      if(this.executionInProgress){
        return true;
      }
      if(this.stack && this.stack.length>0){
        let command = this.stack.shift();
        console.log('command pop');
        this.execute(command);
      }
    }.bind(this), 10);
  }

  async execute (command){
    console.log('execution start');
    this.executionInProgress = true;
    await command.run();
    this.executionInProgress = false;
    return;
  }
}

let commandManager =  new CommandManager();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Command {
  constructor(packageData, eventName){
      this.package = packageData;
      this.eventName = eventName;
  }

  async run(){
    console.log(this.package);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Command;



/***/ }),
/* 3 */
/***/ (function(module, exports) {

var dataArray = new Uint8Array(3);
dataArray[0] = 17;
dataArray[1] = 34;
dataArray[2] = 1;
exports.bytesTakeOff = dataArray;

var dataArray = new Uint8Array(3);
dataArray[0] = 17;
dataArray[1] = 34;
dataArray[2] = 14;
exports.bytesRotate180 = dataArray;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_utils_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_utils_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__commons_utils_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_commandManager_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_interfaces_flight_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_interfaces_sensors_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_interfaces_events_js__ = __webpack_require__(13);








/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_commandManager_js__ = __webpack_require__(1);
/**
 * Blockly Demos: Code
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */


/**
 * Create a namespace for the application.
 */
global.Code = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
  'en': 'English'
};

Code.eventListeners = [];

var refreshTabCode = function(event) {
  if(event.type === Blockly.Events.DELETE){
     removeAllEventListener();
     Code.runJS();
  }
  if( event.type === Blockly.Events.CHANGE ) {

  }
  if (event.type == Blockly.Events.CHANGE || event.type == Blockly.Events.MOVE) {
    if (Code.selected) {
      var content = document.getElementById('content_' + Code.selected);

      if (content.id == 'content_javascript') {
          var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
          content.textContent = code;
          if (typeof PR.prettyPrintOne == 'function') {
            code = content.textContent;
            code = PR.prettyPrintOne(code, 'js');
            content.innerHTML = code;
          }
        } else if (content.id == 'content_python') {
          code = Blockly.Python.workspaceToCode(Code.workspace);
          content.textContent = code;
          if (typeof PR.prettyPrintOne == 'function') {
            code = content.textContent;
            code = PR.prettyPrintOne(code, 'py');
            content.innerHTML = code;
          }
        }
    }
  }
};

let device = null;
function getSupportedProperties(characteristic) {
    let supportedProperties = [];
    for (const p in characteristic.properties) {
        if (characteristic.properties[p] === true) {
            supportedProperties.push(p.toUpperCase());
        }
    }
    return '[' + supportedProperties.join(', ') + ']';
}

Code.showNotification = function(Text){
  var element = $('#notification');
  element.find('span').text(Text);
  element.addClass('show');
  setTimeout(function(){ element.removeClass('show'); }, 3000);
}

Blockly.Variables.predefinedVars.push("MyVariableName");

var readSingleFile = function(e) {
  Blockly.mainWorkspace.clear();
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

var displayContents = function(contents) {
  var xml = Blockly.Xml.textToDom(contents);
  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);

Code.createAndOpenFile = function(filename, xml) {
  var xmltext = Blockly.Xml.domToText(xml);
  var pom = document.createElement('a');

  var filename = filename + ".xml";
  var pom = document.createElement('a');
  var bb = new Blob([xmltext], {type: 'text/plain'});

  pom.setAttribute('href', window.URL.createObjectURL(bb));
  pom.setAttribute('download', filename);

  pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
  pom.draggable = true;
  pom.classList.add('dragout');

  pom.click();
}

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function() {
  var lang = Code.getStringParamFromUrl('lang', '');
  if (Code.LANGUAGE_NAME[lang] === undefined) {
    // Default to English.
    lang = 'en';
  }
  return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function() {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function(defaultXml) {
  try {
    var loadOnce = window.sessionStorage.loadOnceBlocks;
  } catch(e) {
    // Firefox sometimes throws a SecurityError when accessing sessionStorage.
    // Restarting Firefox fixes this, so it looks like a bug.
    var loadOnce = null;
  }
  if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    // An href with #key trigers an AJAX call to retrieve saved blocks.
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
  } else if (loadOnce) {
    // Language switching stores the blocks during the reload.
    delete window.sessionStorage.loadOnceBlocks;
    var xml = Blockly.Xml.textToDom(loadOnce);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
  } else if (defaultXml) {
    // Load the editor with default starting blocks.
    var xml = Blockly.Xml.textToDom(defaultXml);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
  } else if ('BlocklyStorage' in window) {
    // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(BlocklyStorage.restoreBlocks, 0);
  }
};

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function() {
  // Store the blocks for the duration of the reload.
  // This should be skipped for the index page, which has no blocks and does
  // not load Blockly.
  // MSIE 11 does not support sessionStorage on file:// URLs.
  if (typeof Blockly != 'undefined' && window.sessionStorage) {
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.sessionStorage.loadOnceBlocks = text;
  }

  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
      languageMenu.options[languageMenu.selectedIndex].value);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname + search;
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Code.bindClick = function(el, func) {
  if (typeof el == 'string') {
    el = document.getElementById(el);
  }
  el.addEventListener('click', func, true);
  el.addEventListener('touchend', func, true);
};

/**
 * Load the Prettify CSS and JavaScript.
 */
Code.importPrettify = function() {
  var script = document.createElement('script');
  script.setAttribute('src', 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js');
  document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Code.getBBox_ = function(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * List of tab names.
 * @private
 */
Code.TABS_ = ['blocks', 'javascript', 'python'];

Code.selected = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Code.tabClick = function(clickedName) {
  // if (document.getElementById('tab_blocks').className == 'tabon') {
  //   Code.workspace.setVisible(false);
  // }
  // Deselect all tabs and hide all panes.
  // for (var i = 0; i < Code.TABS_.length; i++) {
  //   var name = Code.TABS_[i];
  //   document.getElementById('tab_' + name).className = 'taboff';
  //   document.getElementById('content_' + name).style.visibility = 'hidden';
  // }

  // Select the active tab.
  Code.selected = clickedName;
  // document.getElementById('tab_' + clickedName).className = 'tabon';
  // Show the selected pane.
  document.getElementById('content_' + clickedName).style.visibility =
      'visible';
  Code.renderContent();
  if (clickedName == 'blocks') {
    Code.workspace.setVisible(true);
  }
  Blockly.svgResize(Code.workspace);
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Code.renderContent = function() {
  var content = document.getElementById('content_' + Code.selected);
  // Initialize the pane.
  if (content.id == 'content_xml') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    xmlTextarea.value = xmlText;
    xmlTextarea.focus();
  } else if (content.id == 'content_javascript') {
    var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof PR.prettyPrintOne == 'function') {
      code = content.textContent;
      code = PR.prettyPrintOne(code, 'js');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_python') {
    code = Blockly.Python.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof PR.prettyPrintOne == 'function') {
      code = content.textContent;
      code = PR.prettyPrintOne(code, 'py');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_php') {
    code = Blockly.PHP.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof PR.prettyPrintOne == 'function') {
      code = content.textContent;
      code = PR.prettyPrintOne(code, 'php');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_dart') {
    code = Blockly.Dart.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof PR.prettyPrintOne == 'function') {
      code = content.textContent;
      code = PR.prettyPrintOne(code, 'dart');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_lua') {
    code = Blockly.Lua.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof PR.prettyPrintOne == 'function') {
      code = content.textContent;
      code = PR.prettyPrintOne(code, 'lua');
      content.innerHTML = code;
    }
  }
};

/**
 * Initialize Blockly.  Called on page load.
 */

Code.onresize = function(e) {
  var container = document.getElementById('content_area');
  var bBox = Code.getBBox_(container);
  for (var i = 0; i < Code.TABS_.length; i++) {
   var el = document.getElementById('content_' + Code.TABS_[i]);
   if (el) {
     el.style.top = bBox.y + 'px';
     el.style.left = bBox.x + 'px';
     // Height and width need to be set, read back, then set again to
     // compensate for scrollbars.
     el.style.height = bBox.height + 'px';
     el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
     el.style.width = bBox.width + 'px';
     el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
   }
  }
  // Make the 'Blocks' tab line up with the toolbox.
  if (Code.workspace && Code.workspace.toolbox_.width) {
   document.getElementById('tab_blocks').style.minWidth =
       (Code.workspace.toolbox_.width - 38) + 'px';
       // Account for the 19 pixel margin and on each side.
  }
  };


Code.init = function() {
  Code.initLanguage();

  var rtl = Code.isRtl();
  var container = document.getElementById('content_area');
  // The toolbox XML specifies each category name using Blockly's messaging
  // format (eg. `<category name="%{BKY_CATLOGIC}">`).
  // These message keys need to be defined in `Blockly.Msg` in order to
  // be decoded by the library. Therefore, we'll use the `MSG` dictionary that's
  // been defined for each language to import each category name message
  // into `Blockly.Msg`.
  // TODO: Clean up the message files so this is done explicitly instead of
  // through this for-loop.
  for (var messageKey in MSG) {
    if (goog.string.startsWith(messageKey, 'cat')) {
      Blockly.Msg[messageKey.toUpperCase()] = MSG[messageKey];
    }
  }

  // Construct the toolbox XML.
  var toolboxText = document.getElementById('juniorXml').outerHTML;
  var toolboxXml = Blockly.Xml.textToDom(toolboxText);


  Code.workspace = Blockly.inject('content_blocks',
      {grid:
          {spacing: 25,
           length: 3,
           colour: '#ccc',
           snap: true},
       media: '../../media/',
       rtl: rtl,
       toolbox: toolboxXml,
       zoom:
           {controls: true,
            wheel: true}
      });

  // Add to reserved word list: Local variables in execution environment (runJS)
  // and the infinite loop detection function.
  Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');

  Code.loadBlocks('');

  Code.workspace.addChangeListener(refreshTabCode);

  if ('BlocklyStorage' in window) {
    // Hook a save function onto unload.
    BlocklyStorage.backupOnUnload(Code.workspace);
  }

  $('#juniorXmlBtn').click(function(e){
    var toolboxText = document.getElementById('juniorXml').outerHTML;
    var toolboxXml = Blockly.Xml.textToDom(toolboxText);
    $('.blocklyToolboxDiv').attr('role', 'junior');
    Code.workspace.updateToolbox(toolboxXml);
  });

  $('#seniorXmlBtn').click(function(e){
    var toolboxText = document.getElementById('seniorXml').outerHTML;
    var toolboxXml = Blockly.Xml.textToDom(toolboxText);
    $('.blocklyToolboxDiv').attr('role', 'senior');
    Code.workspace.updateToolbox(toolboxXml);
  });

  $('#masterXmlBtn').click(function(e){
    var toolboxText = document.getElementById('masterXml').outerHTML;
    var toolboxXml = Blockly.Xml.textToDom(toolboxText);
    $('.blocklyToolboxDiv').attr('role', 'master');
    Code.workspace.updateToolbox(toolboxXml);
  });

  Code.tabClick(Code.selected);

  Code.bindClick('trashButton',
      function() {Code.discard(); Code.renderContent();});
  Code.bindClick('runButton', Code.runJS);
  // Disable the link button if page isn't backed by App Engine storage.
  var linkButton = document.getElementById('linkButton');
  if ('BlocklyStorage' in window) {
    BlocklyStorage['HTTPREQUEST_ERROR'] = MSG['httpRequestError'];
    BlocklyStorage['LINK_ALERT'] = MSG['linkAlert'];
    BlocklyStorage['HASH_ERROR'] = MSG['hashError'];
    BlocklyStorage['XML_ERROR'] = MSG['xmlError'];
    Code.bindClick(linkButton,
        function() {BlocklyStorage.link(Code.workspace);});
  } else if (linkButton) {
    linkButton.className = 'disabled';
  }

  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    Code.bindClick('tab_' + name,
        function(name_) {return function() {Code.tabClick(name_);};}(name));
  }
  Code.onresize();
  Blockly.svgResize(Code.workspace);

  // Lazy-load the syntax-highlighting.
  window.setTimeout(Code.importPrettify, 1);
  Blockly.Variables.createVariableNoPrompt(Code.workspace, null, '', 'pitch');
  Blockly.Variables.createVariableNoPrompt(Code.workspace, null, '', 'roll');
  Blockly.Variables.createVariableNoPrompt(Code.workspace, null, '', 'yaw');
  Blockly.Variables.createVariableNoPrompt(Code.workspace, null, '', 'throttle');

  Code.loadWorkspace();
  $('.blocklyToolboxDiv').attr('role', 'junior');

};

/**
 * Initialize the page language.
 */
Code.initLanguage = function() {
  // Set the HTML's language and direction.
  var rtl = Code.isRtl();
  document.dir = rtl ? 'rtl' : 'ltr';
  document.head.parentElement.setAttribute('lang', Code.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  // languages.sort(comp);
  // // Populate the language selection menu.
  // var languageMenu = document.getElementById('languageMenu');
  // languageMenu.options.length = 0;
  // for (var i = 0; i < languages.length; i++) {
  //   var tuple = languages[i];
  //   var lang = tuple[tuple.length - 1];
  //   var option = new Option(tuple[0], lang);
  //   if (lang == Code.LANG) {
  //     option.selected = true;
  //   }
  //   languageMenu.options.add(option);
  // }
  // languageMenu.addEventListener('change', Code.changeLanguage, true);

  // Inject language strings.
  document.title += ' ' + MSG['title'];
  //document.getElementById('title').textContent = MSG['title'];
  document.getElementById('tab_blocks').textContent = MSG['blocks'];

  document.getElementById('linkButton').title = MSG['linkTooltip'];
  document.getElementById('runButton').title = MSG['runTooltip'];
  document.getElementById('trashButton').title = MSG['trashTooltip'];
};

Code.loadWorkspace = function() {
  Blockly.mainWorkspace.clear();
  var projectName = 'coDrone';

  if (typeof(Storage) !== 'undefined') {
    if (localStorage.data !== null) {
      var xml = Blockly.Xml.textToDom(localStorage.getItem(projectName));
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    }
  } else {
    console.log('Storage is not support.');
  }
};

/**
 * Execute the user's code.
 * Just a quick and dirty eval.  Catch infinite loops.
 */
Code.runJS = function() {
  __WEBPACK_IMPORTED_MODULE_0__lib_commandManager_js__["a" /* commandManager */].initCommandConsumer();
  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
  var timeouts = 0;
  var checkTimeout = function() {
    if (timeouts++ > 1000000) {
      throw MSG['timeout'];
    }
  };
  var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval('(async function(){'+code+'})()');
    //eval(code);
  } catch (e) {
    alert(MSG['badCode'].replace('%1', e));
  }
};

Code.runJSMethod = function(method) {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
  var timeouts = 0;
  var checkTimeout = function() {
    if (timeouts++ > 1000000) {
      throw MSG['timeout'];
    }
  };
  var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code+method);
  } catch (e) {
    alert(MSG['badCode'].replace('%1', e));
  }
};

/**
 * Discard all blocks from the workspace.
 */
Code.discard = function() {
  var count = Code.workspace.getAllBlocks().length;
  if (count < 2 ||
      window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1', count))) {
    Code.workspace.clear();
    if (window.location.hash) {
      window.location.hash = '';
    }
  }
};

// Load the Code demo's language strings.
document.write('<script src="msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="../../msg/js/' + Code.LANG + '.js"></script>\n');

window.addEventListener('load', Code.init);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.runJS = function(){
  Code.runJS();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commandManager_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commands_takeOff_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commands_rotate180_js__ = __webpack_require__(9);





global.takeOff = function (){
  var takeOff = new __WEBPACK_IMPORTED_MODULE_1__commands_takeOff_js__["a" /* default */]();
  __WEBPACK_IMPORTED_MODULE_0__commandManager_js__["a" /* commandManager */].addCommand(takeOff);
}

global.rotate180 = function(){
  var rotate180 = new __WEBPACK_IMPORTED_MODULE_2__commands_rotate180_js__["a" /* default */]();
  __WEBPACK_IMPORTED_MODULE_0__commandManager_js__["a" /* commandManager */].addCommand(rotate180);
}

global.land = function (){
  alert('land');
}.bind(this);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_flyEventsTypes_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_flyEventsTypes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__types_flyEventsTypes_js__);



class TakeOff extends __WEBPACK_IMPORTED_MODULE_0__command_js__["a" /* default */] {
  constructor(){
      var packageTakeoff = __WEBPACK_IMPORTED_MODULE_1__types_flyEventsTypes_js__["bytesTakeOff"];
      super(packageTakeoff, '');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TakeOff;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_flyEventsTypes_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_flyEventsTypes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__types_flyEventsTypes_js__);



class Rotate180 extends __WEBPACK_IMPORTED_MODULE_0__command_js__["a" /* default */] {
  constructor(){
      var packageRotate180 = __WEBPACK_IMPORTED_MODULE_1__types_flyEventsTypes_js__["bytesRotate180"];
      super(packageRotate180, false);
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Rotate180;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commandManager_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commands_getBatteryPercentage_js__ = __webpack_require__(11);



function getBytesFromType(type) {
    return packages[type];
}

global.getBatteryPercentage = async function (){
   var getBatteryPercentage = new __WEBPACK_IMPORTED_MODULE_1__commands_getBatteryPercentage_js__["a" /* default */]();
   var batteryValue = getBatteryPercentage.getBatteryValue();
   __WEBPACK_IMPORTED_MODULE_0__commandManager_js__["a" /* commandManager */].addCommand(getBatteryPercentage);
   return batteryValue;
}.bind(this);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_sensorTypes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_sensorTypes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__types_sensorTypes_js__);



class GetBatteryPercentage extends __WEBPACK_IMPORTED_MODULE_0__command_js__["a" /* default */] {
  constructor(){
      var batteryPackage = __WEBPACK_IMPORTED_MODULE_1__types_sensorTypes_js__["sensorBattery"];
      super(batteryPackage, 'batteryPorcentage');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
    const value = await Code.readCharacteristic.readValue();

    var arrayResult = new Uint8Array(value.buffer);
    console.log('Battery percentage is ' + arrayResult);
    $('#testSensorBatteryLabel').show();
    let batteryPorcentageValue = arrayResult[7] & 0xFF;
    $('#batteryPercentageValue').html(batteryPorcentageValue);
    var event = new CustomEvent(this.eventName, { detail: batteryPorcentageValue });
    dispatchEvent(event);
  }

  async getBatteryValue (){
    return new Promise(function(resolve, reject) {
           addEventListener(this.eventName, function (e) {
             resolve(e.detail);
            }, false);
    }.bind(this));
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GetBatteryPercentage;



/***/ }),
/* 12 */
/***/ (function(module, exports) {

var dataArray = new Uint8Array(3);
dataArray[0] = 17;
dataArray[1] = 144;
dataArray[2] = 49;
exports.sensorBattery = dataArray;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_consts_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_consts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__constants_consts_js__);

var EventLib = {};
EventLib.LowBatteryCallback = null;
const batteryLowLevelValue = 20;

global.onKeyPressEvent = function(keyCode, callback){
  global.keyPressMap[keyCode] =  {callback: callback};
  if(EventLib.keydownCallback){
    return;
  }
  EventLib.AddKeyPressEvent (callback);
};

global.onEvent = function(eventType, callback){

  switch (eventType) {
   case LOW_BATTERY:
     EventLib.LowBatteryCallback = callback;
     global.LowBatteryLoop = setInterval(async function(){
       console.log('start iteration: ');
       var batteryPorcentage = await getBatteryPercentage();
       if(EventLib.LowBatteryCallback && batteryPorcentage<batteryLowLevelValue) {
         EventLib.LowBatteryCallback();
         clearInterval(global.LowBatteryLoop);
         EventLib.LowBatteryCallback = null;
       }
       console.log('end iteration: ');
     }.bind(this), 1500);
          break;
   }
};

global.removeAllEventListener = function (){
  if(EventLib.keydownCallback) {
    removeEventListener('keydown', EventLib.keydownCallback);
    global.keyPressMap = {};
    EventLib.keydownCallback = null;
  }
  if(global.LowBatteryLoop){
    EventLib.LowBatteryCallback = null;
    clearInterval(global.LowBatteryLoop);
  }
}

EventLib.AddKeyPressEvent = function (callback){
  EventLib.keydownCallback = function(e){
      if (keyPressMap && keyPressMap[e.keyCode]){
        try {
          keyPressMap[e.keyCode].callback();
        } catch (e) {
          alert(MSG['badCode'].replace('%1', e));
        }
      }
  };
  global.addEventListener("keydown", EventLib.keydownCallback);
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.PRIMARY_SERVICE = 'c320df00-7891-11e5-8bcf-feff819cdc9f';
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
global.LOW_BATTERY = 4;

global.BACKSPACE = 8;
global.ENTER = 13;

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

/***/ })
/******/ ]);