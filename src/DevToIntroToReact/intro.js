import React from "react";

export default class HelloWorld extends React.PureComponent {
  render() {
    return (
      <div>
        <p>Hello World </p>
        <span>Learning React</span>
        <strong> Today Date is: {new Date().toLocaleDateString()}</strong>
      </div>
    );
  }
}

export function Dummy() {
  return <div>My Dummy Stateless Functional Component</div>;
}
