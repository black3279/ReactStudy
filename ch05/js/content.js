"use strict";

class Note extends React.Component {
  confirmLeave(e) {
    let confirmationMessage = '정말 닫으시겠습니까?';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
  }

  componentDidMount() {
    console.log('등록');
    window.addEventListener('beforeunload', this.confirmLeave);
  }

  componentWillUnmount() {
    console.log('삭제');
    window.removeEventListener('beforeunload', this.confirmLeave);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "\uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB294 ", this.props.secondsLeft, " \uCD08 \uB4A4\uC5D0 \uC81C\uAC70\uB41C\uB2E4."));
  }

}

let secondsLeft = 5;
let interval = setInterval(() => {
  if (secondsLeft == 0) {
    ReactDOM.render( /*#__PURE__*/React.createElement("div", null, "Note was removed after ", secondsLeft, " seconds."), document.getElementById('content'));
    clearInterval(interval);
  } else {
    ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Note, {
      secondsLeft: secondsLeft
    })), document.getElementById('content'));
  }

  secondsLeft--;
}, 1000);
