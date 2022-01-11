import React, { useReducer } from "react";

const initialState = { count: 0 };

const increment = 'increment';
const decrement = 'decrement';

const reducer = (state, action) => {
  switch (action.type) {
    case increment:
      return { count: state.count + 1 };
    case decrement:
      return { count: state.count - 1 };
    default:
      throw new Error('No Matched Type');
  }
};

const ReducerTest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <h1>Reducer Test</h1>
      <h2>Count: { state.count }</h2>
      <button onClick={() => dispatch({ type: increment })}>PLUS</button>
      <button onClick={() => dispatch({ type: decrement })}>MINUS</button>
    </section>
  );
};

export default ReducerTest;
