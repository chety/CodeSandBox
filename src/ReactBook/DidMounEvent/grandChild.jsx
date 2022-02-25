import React from "react";
import ReactDOM from "react-dom";

class GrandChild extends React.Component {
  value() {
    return ReactDOM.findDOMNode(this.refs.input).value;
  }

  componentDidMount() {
    console.log("GrandChild Mounted");
  }

  componentWillReceiveProps(nextProps) {
    console.log("GrandChild -> componentWillReceiveProps", nextProps);
  }

  render() {
    const { textValue, handleOnChange } = this.props;
    return (
      <React.Fragment>
        <input
          type="text"
          ref="input"
          defaultValue="Comoloko"
          value={textValue}
          onChange={handleOnChange}
        />
      </React.Fragment>
    );
  }
}

export default GrandChild;
