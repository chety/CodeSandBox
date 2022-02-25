import React from "react";
import ReactDOM from "react-dom";
import { Capturing } from "./EventHandlers/Capturing";

import { Key } from "./KeyInReact";
// import Counter from "./Counter/counter";
// import ComponentLifeCycle from "./LifeCycle/componentLifeCycle";
// import Ref from "./Refs/ref";
// import {
//   WrappedOne,
//   WrappedTwo,
//   WrappedThree
// } from "./HOC/higherOrderComponent";

// import Status from "./DevToIntroToReact/status";
// import Person from "./ReactBook/person.jsx";
// import ConditionalRendering from "./ConditionalRendering/condRendering.jsx";
// import ConditionalRendering2 from "./ConditionalRendering/condRendering.jsx";
// import ConditionalRendering3 from "./ConditionalRendering/condRendering.jsx";
// import Parent from "./ReactBook/DidMounEvent/parent.jsx";
//import Lister from "./ThinkingInReact/index";
import Posts from "./LazyLoad/post";
//import { CounterHooks } from "./Hooks/useReducer";
//import { RouterContainer } from "./Router/routerContainer";

import "./styles.css";

const rootElement = document.getElementById("root");
// ReactDOM.render(<WrappedThree isLoggedIn={true} />, rootElement);
//ReactDOM.render(<Counter />, rootElement);
//ReactDOM.render(<Status />, rootElement);
//ReactDOM.render(<Person name="chety" age={30} />, rootElement);
//ReactDOM.render(<ConditionalRendering3 />, rootElement);
// ReactDOM.render(<Parent />, rootElement);
// ReactDOM.render(<Key />, rootElement);
ReactDOM.render(<Posts />, rootElement);
