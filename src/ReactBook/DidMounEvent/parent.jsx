import React from "react";
import Child from "./child.jsx";
import Dummy from "./dummyComp.jsx";

export default class Parent extends React.Component {
  state = {
    info: "Loading ..."
  };
  data = [1, 2];
  data2 = [{ id: 1, name: "chety" }];
  componentDidMount() {
    /*
      componentDidMount first loads the most inner child component to the upper parent 
      component. 
     */
    console.log("Parent Mounted");
    console.log("Value: ", this.refs.child.value());
  }

  componentWillReceiveProps(nextProps) {
    //Since changing input text just make state change and   we do not receieve new props
    //then this method won't be triggered.
    console.log("Parent -> componentWillReceiveProps", nextProps);
  }
  handleOnChange = e => {
    this.setState({
      info: e.target.value
    });

    this.data.push("messi");
    //console.log(e.target.value);
    this.data2 = [...this.data2, { id: 2, name: "Amokachi" }];
  };
  render() {
    return (
      <React.Fragment>
        <Child ref="child" handleOnChange={this.handleOnChange} />
        <span>
          {"  "}
          {this.state.info}
        </span>
        <Dummy data={this.data} data2={this.data2} />
      </React.Fragment>
    );
  }
}
