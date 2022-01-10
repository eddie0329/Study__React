import React, { useState, useCallback } from 'react';

const Test1 = () => {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, []);
  
  const decrease = useCallback(() => {
    setCount((prevCount) => prevCount - 1)
  }, [])

  return (
    <section>
      <h1>Test1</h1>
      <h2>{ count }</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </section>
  );
};

export default Test1;
