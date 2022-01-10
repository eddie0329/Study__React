import React, { useEffect, useState, useCallback } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("HELLO WORLD USE EFFECT COMP CREATED");
    return () => console.log("HELLO WORLD USE EFFECT COMP DESTORYED");
  }, []);

  const increase = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <>
      <h2>HELLO WORLD!!</h2>
      <h2>{ count }</h2>
      <button onClick={increase}>PLUS</button>
    </>
  );
};

export default UseEffect;
