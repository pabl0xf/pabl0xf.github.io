class ConnectionBox extends React.Component {
  constructor(props) {
   super(props);
   this.state = {isToggleOn: false};

   // This binding is necessary to make `this` work in the callback
   this.handleClick = this.handleClick.bind(this);
   this.closePannel = this.closePannel.bind(this);
  }

  handleClick(el) {
    if(Code.device){
        Code.device.disconnect();
        Code.device = null;
        $('#scanButton').text('Connect');
        $('#coDroneLabel').hide();
        $('#forceLanding').prop( "disabled", true );
        $('#connectMenu').removeClass('connected');
    }
    else{
      console.log('Requesting any Bluetooth Device...');
      navigator.bluetooth.requestDevice({
              // filters: [...] <- Prefer filters to save energy & show relevant devices.
              acceptAllDevices: true,
              optionalServices: ['c320df00-7891-11e5-8bcf-feff819cdc9f']
          })
          .then(device => {
              console.log('Connecting to GATT Server...');
              return device.gatt.connect();
              console.log(device);
          })
          .then(server => {
              Code.device = server;
              console.log('server', server);
              Code.deviceConnected = server.device.name;

              $('#scanButton').text('Disconnect');
              $('#coDroneLabel').show();
              $('#coDroneLabel').text(' Connected to '+Code.deviceConnected);
              $('#forceLanding').prop( "disabled", false );
              $('#connectMenu').addClass('connected');
          })
          .catch(error => {
              console.log('Argh! ' + error);
              alert(error);
          });
        }
  }

  closePannel(el) {
    if(!this.state.isToggleOn){
      this.setState({
        isToggleOn: true
      });
      $('#connectMenu').addClass('connected');
    }
    else {
      this.setState({
        isToggleOn: false
      });
      $('#connectMenu').removeClass('connected');
    }
  }

  render() {
    return (
      <div>
        <a onClick={this.closePannel}>x</a>
        <p>Current Drone sensor data</p>
        <button type="button"  onClick={this.handleClick} id="scanButton" className="btn btn-default navbar-btn">Connect</button>

        <button type="button" id="reconnectButton" className="btn btn-default navbar-btn">Reconnect</button>
      </div>
    );
  }
}

ReactDOM.render(
  <ConnectionBox />,
  document.getElementById('connectMenu')
);
