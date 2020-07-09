"use strict";

const HelloWorld = function HelloWorld(props) {
  return /*#__PURE__*/React.createElement("h1", {
    title: props.title,
    id: props.id
  }, "Hello ", props.frameworkName, " world !!! ");
};

function Link(props) {
  return /*#__PURE__*/React.createElement("a", {
    href: props.href,
    target: "_blank",
    className: "btn btn-primary"
  }, props.text);
}

const HelloWorld2 = props => {
  return /*#__PURE__*/React.createElement("h1", {
    title: props.title,
    id: props.id
  }, "Hello ", props.frameworkName, " world !!! ");
};

const Link2 = props => /*#__PURE__*/React.createElement("a", {
  href: props.href,
  target: "_blank",
  className: "btn btn-primary"
}, props.text, " ");

ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelloWorld, {
  title: "test",
  id: "kblack.lee",
  frameworkName: "react"
}), /*#__PURE__*/React.createElement(HelloWorld2, {
  title: "test2",
  id: "kblack.lee",
  frameworkName: "react2"
}), /*#__PURE__*/React.createElement(Link, {
  text: "Buy React Quickly",
  href: "https://www.manning.com/books/react-quickly"
}), /*#__PURE__*/React.createElement(Link, {
  text: "Buy React Quickly2",
  href: "https://www.manning.com/books/react-quickly"
})), document.getElementById('content'));
