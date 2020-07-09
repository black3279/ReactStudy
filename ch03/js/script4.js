"use strict";

class HelloWorld extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h1", {
      title: this.props.title,
      id: this.props.id
    }, "Hello ", this.props.frameworkName, " world !!! ");
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelloWorld, {
  id: "ember",
  frameworkName: "Ember.js",
  title: "A framework for creating ambitious web applications. "
}), /*#__PURE__*/React.createElement(HelloWorld, {
  id: "backborn",
  frameworkName: "Backbone.js",
  title: "Backbone.js gives structure to web applications..."
})), document.getElementById('content'));
