import React, { useState, useCallback } from 'react';
import UseEffect from './UseEffect';

const Test3 = () => {
  const [showComp, setShowComp] = useState(true);

  const onClick = useCallback(() => {
    setShowComp((prevShowComp) => {
      return !prevShowComp;
    })
  }, []);

  return (
    <section>
      <h1>Test3</h1>
      {!showComp || <UseEffect />}
      <button onClick={onClick}>SHOW!</button>
    </section>
  );
};

export default Test3;
