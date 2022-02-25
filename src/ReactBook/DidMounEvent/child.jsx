import React from "react";
import GrandChild from "./grandChild.jsx";

class Child extends React.Component {
  componentDidMount() {
    console.log("Child Mounted");
  }

  value() {
    return this.refs.grandChild.value();
  }

  componentWillReceiveProps(nextProps) {
    console.log("Child -> componentWillReceiveProps", nextProps);
  }

  render() {
    return (
      <React.Fragment>
        <GrandChild
          ref="grandChild"
          handleOnChange={this.props.handleOnChange}
        />
      </React.Fragment>
    );
  }
}

export default Child;
