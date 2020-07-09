"use strict";

class ProfileLink extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("a", {
      href: this.props.url,
      target: "_blank"
    }, this.props.label);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProfileLink, {
  url: "http://reactquickly.co",
  label: "Time for React?"
})), document.getElementById('content'));
