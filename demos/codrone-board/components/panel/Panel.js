class ContentTutorials extends React.Component {
  render() {
    return (
      <div className="content-panel content-1">
        <h1 style={{textAlign: 'center'}}>Tutorials</h1>
      </div>
    );
  }
}

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
    var panelId = el.target.dataset.panelId;
    var tab = el.target.dataset.tab;

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
  }

  render() {
    return (
        <div id="rightPanel-1">
          <a href="#" className="close-right-panel" onClick={this.handleCloseClick}><i className="glyphicon glyphicon-remove"></i></a>
          <button className="show-right-panel" data-panel-id="1" onClick={this.handleClick}>Tuts</button>
          <button className="show-right-panel" data-panel-id="2" data-tab="javascript" onClick={this.handleClick}>'J'</button>
          <button className="show-right-panel" data-panel-id="3" data-tab="python" onClick={this.handleClick}>'P'</button>
          <button className="show-right-panel" data-panel-id="4" onClick={this.handleClick}>'S'</button>

          <ContentTutorials />
          <ContentJavascript />
          <ContentPython />
          <ContentSensor />
        </div>
    );
  }
}

ReactDOM.render(
  <Panel />,
  document.getElementById('panel')
);