import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Person extends React.PureComponent {
  state = {
    foo: 12
  };
  render() {
    const { name, age } = this.props;
    console.log(this.props.foo); //default value of props is an empty object. So that does not create error

    //console.log(this.state.foo) // default value of state is null. That will create an error. Either
    //this.setState({ foo: "bar" }); do not set state in render !!!
    //let node = ReactDOM.findDOMNode(this); Don't do this either
    return (
      <>
        {name || "Unknown name"} is {age || "Unknown age"} years old
      </>
    );
  }
}
Person.defaultProps = {
  age: "Unknown age",
  name: "Unknown name"
};

Person.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string
};
