import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleAlertClick() {
    setTimeout(() => {
      alert(`Count: ${count}`);
    }, 3000);
  }
  function increase() {
    setCount(prev => prev + 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Click me</button>
      <button onClick={handleAlertClick}>Show me</button>
    </div>
  );
}