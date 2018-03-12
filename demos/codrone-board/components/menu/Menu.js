import React, { Component } from "react";
import ReactDOM from "react-dom";
import { eventManager } from '../../lib/eventManager.js';
import { keyPressManager } from '../../lib/keyPressManager.js';

class Burger extends React.Component {
  constructor(props) {
   super(props);
   this.state = {isToggleOn: true};

   // This binding is necessary to make `this` work in the callback
   this.handleClick = this.handleClick.bind(this);
   this.handleRunClick = this.handleRunClick.bind(this);
  }

  handleClick(el) {
    var menuElement = el.target.parentElement.parentElement.getElementsByClassName('menu')[0];
    menuElement.classList.toggle('active');
  }

  handleSaveClick(el) {
    el.preventDefault();
    var filename = prompt("File name: ");
    if (filename == null || filename == "") {
    } else {
      var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
      localStorage.setItem('coDrone', Blockly.Xml.domToText(xml));
      Code.createAndOpenFile(filename, xml);
      Code.showNotification('Success.');
    }
  }

  handleOpenClick(el) {
    el.preventDefault();
    document.getElementById('file-input').click();
  }

  handleUndoRedoClick(el) {
    el.preventDefault();
    var action = el.target.parentElement.dataset.actionButton;

    if (action == 'redo') {
      Code.workspace.undo(true);
    } else {
      Code.workspace.undo();
    }
  }

  handleForceLandingClick(el) {
    if (Code.device != null) {

    } else {
      $('.playButton').css('display', 'inline-block');
      $('.forceLanding').css('display', 'none');
      eventManager.removeAllEvents();
      keyPressManager.removeKeyPressEvents();
      //alert('CoDrone is not connected, please connect and try again.');
    }
  }

  handleRunClick(el) {
      $('.forceLanding').css('display', 'inline-block');
      $('.playButton').css('display', 'none');
      Code.runJS();
  }

  render() {
    return (
        <div className="interactive-menu-button">
          <a href="#" onClick={this.handleClick}>
            <span>Menu</span>
          </a>
          <div className="menu">
            <ul>
              <a id="saveWorkspaceBtn" href="#" onClick={this.handleSaveClick}><li>Save</li></a>
              <a id="openWorkspace" href="#" onClick={this.handleOpenClick}><li>Open...</li></a>
              <a href=""><li>New</li></a>
              <li className="separator"></li>
              <a href="#" id="undoButton" onClick={this.handleUndoRedoClick}><li>Undo</li></a>
              <a href="#" id="redoButton" data-action-button="redo" onClick={this.handleUndoRedoClick}><li>Redo</li></a>
            </ul>
          </div>
          <div className="forceLanding"><button type="button" id="forceLanding" onClick={this.handleForceLandingClick} className="btn btn-danger navbar-btn"></button><span>Stop code</span></div>
          <div className="playButton"><button type="button" id="runButton" onClick={this.handleRunClick} className="btn btn-danger navbar-btn"></button><span>Run code</span></div>
        </div>
    );
  }
}

export default Burger;
