import React from "react";

function AuthWrapper(WrappedComponent) {
  return class extends React.Component {
    render() {
      if (this.props.isLoggedIn) {
        return <WrappedComponent {...this.props} />;
      }
      return "You are not Logged In.";
    }
  };
}

/*
A higher-order component is a function that takes a component and 
returns a new component.
 */

class RegularComponent extends React.Component {
  render() {
    return <p>hi</p>;
  }
}
class OtherRegularComponent extends React.Component {
  render() {
    return <p>hello</p>;
  }
}
const FunctionalComponent = () => <p>Hi There</p>;

export const WrappedOne = AuthWrapper(RegularComponent);
export const WrappedTwo = AuthWrapper(OtherRegularComponent);
export const WrappedThree = AuthWrapper(FunctionalComponent);
