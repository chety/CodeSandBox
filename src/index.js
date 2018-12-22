import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter/counter";
import ComponentLifeCycle from "./LifeCycle/componentLifeCycle";
import Ref from "./Refs/ref";
import {
  WrappedOne,
  WrappedTwo,
  WrappedThree
} from "./HOC/higherOrderComponent";

import Status from "./DevToIntroToReact/status";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<WrappedThree isLoggedIn={true} />, rootElement);
//ReactDOM.render(<Counter />, rootElement);
ReactDOM.render(<Status />, rootElement);
