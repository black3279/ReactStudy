"use strict";

let helloWorldReaectElement = /*#__PURE__*/React.createElement("h1", null, "Hello World!");

class HelloWorld extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, helloWorldReaectElement, helloWorldReaectElement);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(HelloWorld, null), document.getElementById('content'));
