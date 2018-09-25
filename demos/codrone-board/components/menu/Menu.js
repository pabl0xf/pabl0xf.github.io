import React, { Component } from "react";
import ReactDOM from "react-dom";
import { eventManager } from "../../lib/eventManager.js";
import { keyPressManager } from "../../lib/keyPressManager.js";
import { commandManager } from "../../lib/commandManager.js";

class Burger extends React.Component {
  constructor(props) {
    super(props);
    var paramGet = location.search.split("debug=")[1];
    this.state = {
      isToggleOn: true,
      debug: paramGet
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleRunClick = this.handleRunClick.bind(this);
  }

  handleClick(el) {
    var menuElement = el.target.parentElement.parentElement.getElementsByClassName(
      "menu"
    )[0];
    menuElement.classList.toggle("active");
  }

  handleSaveClick(el) {
    el.preventDefault();
    var filename = prompt("File name: ");
    if (filename == null || filename == "") {
    } else {
      var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
      localStorage.setItem("coDrone", Blockly.Xml.domToText(xml));
      Code.createAndOpenFile(filename, xml);
      Code.showNotification("Success.");
    }
  }

  handleOpenClick(el) {
    el.preventDefault();
    document.getElementById("file-input").click();
  }

  handleUndoRedoClick(el) {
    el.preventDefault();
    var action = el.target.parentElement.dataset.actionButton;

    if (action == "redo") {
      Code.workspace.undo(true);
    } else {
      Code.workspace.undo();
    }
  }

  handleForceLandingClick(el, skipLanding) {
    eventManager.removeAllEvents();

    global.stopExecution(skipLanding);

    if (skipLanding && keyPressManager.hasKeyEventsAttached()) {
      return;
    }

    if (skipLanding && global.blockInterval) {
      global.RUNNING = true;
      return;
    }

    clearInterval(global.blockInterval);
    global.blockInterval = null;
    keyPressManager.removeKeyPressEvents();

    if ($(".playButton").hasClass("disabled")) {
      $(".playButton").removeClass("disabled");
    }
  }

  handleRunClick(el) {
    if (!Code.device && !this.state.debug) {
      alert("CoDrone is not connected!");
      return;
    }
    if ($(".playButton").hasClass("disabled")) {
      $(".playButton").removeClass("disabled");
      return;
    } else {
      $(".playButton").addClass("disabled");
    }

    global.RUNNING = true;
    Code.runJS();
  }

  componentDidMount() {
    $(document).on(
      "stopExternalEvent",
      function() {
        this.handleForceLandingClick(null, true);
      }.bind(this)
    );
  }

  render() {
    return (
      <div className="interactive-menu-button">
        <a href="#" onClick={this.handleClick}>
          <span>Menu</span>
        </a>
        <div className="menu">
          <ul>
            <a id="saveWorkspaceBtn" href="#" onClick={this.handleSaveClick}>
              <li>Save</li>
            </a>
            <a id="openWorkspace" href="#" onClick={this.handleOpenClick}>
              <li>Open...</li>
            </a>
            <a href="">
              <li>New</li>
            </a>
            <li className="separator" />
            <a href="#" id="undoButton" onClick={this.handleUndoRedoClick}>
              <li>Undo</li>
            </a>
            <a
              href="#"
              id="redoButton"
              data-action-button="redo"
              onClick={this.handleUndoRedoClick}
            >
              <li>Redo</li>
            </a>
          </ul>
        </div>
        <div className="forceLanding">
          <button
            type="button"
            id="forceLanding"
            onClick={this.handleForceLandingClick}
            className="btn btn-danger navbar-btn"
          />
          <span>Stop</span>
        </div>
        <div className="playButton">
          <button
            type="button"
            id="runButton"
            onClick={this.handleRunClick}
            className="btn btn-danger navbar-btn"
          />
          <span className="not-running">Run code</span>
          <span className="running">Code running..</span>
        </div>
      </div>
    );
  }
}

export default Burger;
