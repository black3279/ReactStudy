"use strict";

const DigitalDisplay = function DigitalDisplay(props) {
  return /*#__PURE__*/React.createElement("div", null, props.time);
};

const AnalogDisplay = function AnalogDisplay(props) {
  let date = new Date(props.time);
  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black'
  };
  let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + (date.getSeconds() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  };
  let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: 'rotate(' + (date.getMinutes() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };
  let hourHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 7,
    transform: 'rotate(' + (date.getHours() / 12 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: dialStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: secondHandStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: minuteHandStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: hourHandStyle
  })));
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString()
    };
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating time ...');
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    console.log('Rendering...');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AnalogDisplay, {
      time: this.state.currentTime
    }), /*#__PURE__*/React.createElement(DigitalDisplay, {
      time: this.state.currentTime
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById('content'));
