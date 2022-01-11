import React, { useContext } from "react";
import CounterProvder from "./context";

const Child3 = () => {
  const { state, dispatch } = useContext(CounterProvder);

  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>PLUS</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>MINUS</button>
    </>
  );
};

export default Child3;
