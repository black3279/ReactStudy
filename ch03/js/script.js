"use strict";

class HelloWorld extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div",
     null, /*#__PURE__*/
     React.createElement("h1", null, "1. Hello World"),
     /*#__PURE__*/React.createElement("h1", null, "2. Hello World"));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(HelloWorld, null), document.getElementById('content'));
