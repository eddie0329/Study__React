import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => setCount(prev => prev + 1)}>Plus</button>
        <button onClick={() => setCount(prev => prev - 1)}>Minus</button>
      </div>
    </div>
  );
}