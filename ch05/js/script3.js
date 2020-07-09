"use strict";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      counter: 0,
      currentTime: new Date().toLocaleString()
    };
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating time ...');
      this.setState({
        counter: ++this.state.counter,
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    if (this.state.counter > 2) return /*#__PURE__*/React.createElement("div", null);
    return /*#__PURE__*/React.createElement(Logger, {
      time: this.state.currentTime
    });
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById('content'));
