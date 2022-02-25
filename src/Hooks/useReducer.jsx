import React, { useReducer } from "react";

function setInitialValue(initialValue) {
  return { count: initialValue };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

export function CounterWithReducerHook({ initialValue }) {
  const [state, dispatch] = useReducer(reducer, setInitialValue(initialValue));

  return (
    <>
      <label>Counter: {state.count}</label>
      <br />
      <button
        onClick={() => dispatch({ type: "reset", payload: initialValue })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
    </>
  );
}
