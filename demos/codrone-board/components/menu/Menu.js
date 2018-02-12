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
      Code.device.getPrimaryService('c320df00-7891-11e5-8bcf-feff819cdc9f')
        .then(service => service.getCharacteristic('c320df02-7891-11e5-8bcf-feff819cdc9f'))
        .then(characteristic => {
           // Take off
           var uint8 = new Uint8Array(3);
           uint8[0] = 0x11;
           uint8[1] = 0x24;
           uint8[2] = 0x51;
           return characteristic.writeValue(uint8);
        })
    } else {
      alert('CoDrone is not connected, please connect and try again.');
    }
  }

  handleRunClick(el) {
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
          <div className="forceLanding"><button type="button" id="forceLanding" onClick={this.handleForceLandingClick} className="btn btn-danger navbar-btn">!</button></div>
          <div className="playButton"><button type="button" id="runButton" onClick={this.handleRunClick} className="btn btn-danger navbar-btn"><i className="glyphicon glyphicon-play"></i></button></div>
        </div>
    );
  }
}

ReactDOM.render(
  <Burger />,
  document.getElementById('burgerMenu')
);
