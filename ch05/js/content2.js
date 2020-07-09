"use strict";

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(event) {
    console.log(this, event);
  }

  render() {
    return /*#__PURE__*/React.createElement("button", {
      onClick: this.handleSave
    }, "Save");
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(SaveButton, null), document.getElementById('content'));
