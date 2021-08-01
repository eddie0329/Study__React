import React, { useState, useCallback, useEffect } from 'react';
import Title from './Title';
import PropTypes from 'prop-types';

function CountDisplay({ count }) {

  useEffect(() => {
    console.log("HELLO");
  }, [])

  return (
    <h1>{count}</h1>
  );
}

CountDisplay.defaultProps = {
  count: 0,
}

CountDisplay.propTypes = {
  count: PropTypes.number
}

function Counter() {
  const [title, setTitle] = useState('Counter');
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const changeTitle = useCallback(() => {
    setTitle((prevTitle) => {
      return prevTitle === 'Counter' ? 'HEllo World' : 'Counter';
    });
  }, []);

  return (
    <div>
      <Title title={title} count={count} />
      <CountDisplay count={count} />
      <button onClick={increase}>PLUS</button>
      <button onClick={decrease}>MINUS</button>
      <div><button onClick={changeTitle}>CHANGE</button></div>
    </div>
  );
}

export default Counter;
