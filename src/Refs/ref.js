import React from "react";

export default class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null
    };
  }

  //First way. The classic one
  onHandleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.onHandleChange} />
        <p>{this.state.inputValue}</p>
      </React.Fragment>
    );
  }
}
