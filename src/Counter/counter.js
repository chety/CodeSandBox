import React, { PureComponent } from "react";

export default class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  onCounterValueChange = _ => {
    /*
    ### Method1 ###
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => {
        //setState takes a second parameter as callback. This callback works after the state value changes
        console.log(`In setState callBack -> Counter: ${this.state.counter}`);
      }
    ); */

    /*
   instead of passing an object to setState we will pass a function to setState
   When we pass a function to setState, it guarentees the setState work in order if we have multiple
   setState.
   */
    this.setState(
      (prevState, props) => {
        return { counter: prevState.counter + 1 };
      },
      () => {
        console.log(`In setState callBack -> Counter: ${this.state.counter}`);
      }
    );
    this.setState(
      (prevState, props) => {
        return { counter: prevState.counter + 1 };
      },
      () => {
        console.log(`In setState callBack -> Counter: ${this.state.counter}`);
      }
    );

    /*
    Expecting counter value is 1 here. But just because setState is asyncronous operation, we can not see here the updated value
    */
    console.log(`onCounterValueChange -> Counter: ${this.state.counter}`);
  };
  render() {
    //we can see updated counter value in render method
    console.log(
      this.state.counter ? `render -> Counter: ${this.state.counter}` : null
    );
    return (
      <React.Fragment>
        <button onClick={this.onCounterValueChange}>Click</button>
      </React.Fragment>
    );
  }
  componentDidUpdate() {
    console.log("Component updated");
  }
}
