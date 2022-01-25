import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, selectCount } from '../store/counter/index.store';

const Counter: React.FC = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: { count }</h1>
      <button onClick={() => dispatch(increment())}>PLUS</button>
      <button onClick={() => dispatch(decrement())}>MINUS</button>
      <button onClick={() => dispatch(incrementByAmount(100))}>PLUS 100</button>
    </div>
  );
};

export default Counter;
