import React, { useRef, useReducer, useCallback } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_COUNT = "SET_COUNT";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case SET_COUNT:
      state = action.value;
      return state;
    default:
      return state;
  }
}

function Counter() {
  const countInput = useRef();
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: INCREMENT });
  };
  const onDecrease = () => {
    dispatch({ type: DECREMENT });
  };
  const onClickEnter = useCallback(() => {
    const countValue = parseInt(countInput.current.value, 10);
    dispatch({ type: SET_COUNT, value: countValue });
    countInput.current.value = "";
  }, []);

  return (
    <div>
      <input ref={countInput} />
      <button onClick={onClickEnter}>ENTER</button>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
