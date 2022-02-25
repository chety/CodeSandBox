import React from "react";

class Dummy extends React.Component {
  componentWillReceiveProps(nextProps) {
    //We have an array as props. If in our parent component our array is mutated like this array.push(5)
    //React can not understand our prop is changed. Because in parent component we just mutate array
    //content not he object itself. Reference is still the same. Because of this case in Redux you have
    //to work with immutable data structures. Instead of mutate existing one always return new object.
    console.log("DummyComponent -> componentWillReceiveProps", nextProps);

    //It will write true. Even in parent component new values are pushed, our lifecycle method will
    //not see the data array equal. Use immutable data instead !!!.
    console.log("Mutable compare(Equal?):", this.props.data == nextProps.data);

    //It will write false. Because in every action we return new array instead of pushing
    console.log(
      "IMutable compare(Equal?):",
      this.props.data2 == nextProps.data2
    );
  }

  render() {
    const { data } = this.props;
    return (
      <ul>
        {data.map(d => (
          <li id={d}>{d}</li>
        ))}
      </ul>
    );
  }
}

export default Dummy;
