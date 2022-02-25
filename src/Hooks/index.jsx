import React, { useState, useEffect } from "react";

export function CounterHooks({ initialValue }) {
  const [counter, setCounter] = useState(5);
  const [name, setName] = useState("Chety");

  useEffect(() => {
    console.log("use effect worked");
    document.title = `You clicked ${counter} times`;

    /*
      After SECOND!!! render, before executing any use effect, execute this return statement than execute
      above line. 
    */
    return () => {
      console.log("Prev counter:", counter);
      document.title = `Empty document`;
    };
  }, [counter]);

  return (
    <>
      <label>Counter: {counter}</label>
      <br />
      <button onClick={() => setCounter(initialValue)}>Reset</button>
      <button disabled={counter === 10} onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button disabled={counter === 0} onClick={() => setCounter(counter - 1)}>
        Decrease
      </button>
      <hr />
      <label htmlFor="name">{name}</label>
      <input id="name" onChange={e => setName(e.target.value)} />
    </>
  );
}
