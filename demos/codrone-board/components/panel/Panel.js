import React, { Component } from "react";
import ReactDOM from "react-dom";
import ContentTutorials from './ContentTutorials.js';
import ContentJupyter from './ContentJupyter.js';

class ContentJavascript extends React.Component {
  render() {
    return (
      <div className="content-panel content-2">
        <h1 style={{textAlign: 'center'}}>JavaScript</h1>
        <pre id="content_javascript" className="content"></pre>
      </div>
    );
  }
}

class ContentPython extends React.Component {
  render() {
    return (
      <div className="content-panel content-3">
        <h1 style={{textAlign: 'center'}}>Python</h1>
        <pre id="content_python" className="content"></pre>
      </div>
    );
  }
}

class ContentSensor extends React.Component {
  render() {
    return (
      <div className="content-panel content-4">
          <h3 style={{textAlign: 'center'}}>Sensor data as a right panel</h3>
          <div id="testSensorBatteryLabel">Battery porcentaje: <span id="batteryPercentageValue"></span></div>
      </div>
    );
  }
}

class Panel extends React.Component {
  constructor(props) {
   super(props);
   this.state = {isToggleOn: true};

   // This binding is necessary to make `this` work in the callback
   this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    window.addEventListener('resize', Code.onresize, false);
    Code.onresize();
  }

  handleCloseClick(el) {
    el.preventDefault();
    document.getElementById('rightPanel-1').classList.remove('active');
  }

  handleClick(el) {
    el.preventDefault();
    var panelId = el.currentTarget.dataset.panelId;
    var tab = el.currentTarget.dataset.tab;

    var activeTabButton = document.getElementsByClassName('show-right-panel active')[0];

    if (activeTabButton) {
      activeTabButton.classList.remove('active');
    }

    el.currentTarget.classList.add('active');

    var activeTab = document.getElementsByClassName('content-panel active')[0];
    var contentTab = document.getElementsByClassName('content-' + panelId)[0];

    if (activeTab) {
      activeTab.classList.remove('active');
    }

    contentTab.classList.add('active');

    if (tab) {
      Code.tabClick(tab);
    }

    document.getElementById('rightPanel-1').classList.add('active');
    var codeString = 'import CoDrone\n\ndrone = CoDrone.Codrone()\ndrone.pair(drone.Nearest)\n\n'
    var codeString = codeString + Blockly.Python.workspaceToCode(Code.workspace);
    var encodedString = window.btoa(unescape(encodeURIComponent(codeString)));
    document.getElementById('iframeJupyter').src = 'http://192.168.3.198:8888/notebooks/Untitled1.ipynb?ek='+encodedString
    // var str = h.replace(/(\r\n\t|\n|\r\t)/gm,"\\n");
    // var p = document.getElementById('iframeTutorials')
    // var t = p.contentWindow.document
    // t.getElementById('header-container').style.display = 'none';
    // t.getElementById('menus').style.display = 'none';
    // var iframe_head = t.getElementsByTagName("head")[0];
    // var script_elem = document.createElement('script');
    // script_elem.textContent = "var cell = Jupyter.notebook.get_cell(0);cell.set_text('"+str+"')";
    // iframe_head.appendChild(script_elem);
  }

  render() {
    return (
        <div id="rightPanel-1">
          <a href="#" tabIndex="-1" className="close-right-panel" onClick={this.handleCloseClick}><i className="glyphicon glyphicon-remove"></i></a>
          <button className="show-right-panel" data-panel-id="1" onClick={this.handleClick}><img className="cap" src="./images/icons/graduation-cap.svg" />Tuts</button>
          <button className="show-right-panel" data-panel-id="3" data-tab="python" onClick={this.handleClick}><img src="./images/icons/python_icon_cropped.png" />Python</button>
          <button className="show-right-panel" data-panel-id="2" data-tab="javascript" onClick={this.handleClick}><img src="./images/icons/javascript_icon.png" />Javascript</button>
          <button className="show-right-panel" data-panel-id="5" onClick={this.handleClick}><img className="arduino" src="./images/icons/arduino_icon.png" />Arduino</button>

          <ContentTutorials />
          <ContentJavascript />
          <ContentPython />
          <ContentSensor />
          <ContentJupyter />
        </div>
    );
  }
}

export default Panel;
