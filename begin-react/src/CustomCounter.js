import React from "react";

function CustomCounter() {
  let count = 0;

  const increment = () => {
    count++;
    console.log("incre", count);
  };

  const decrement = () => {
    count--;
    console.log("decre", count);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>UP</button>
      <button onClick={decrement}>DOWN</button>
    </>
  );
}

export default CustomCounter;

// Answer
// -> not change -> Becuz not using useState or ref
// -> WHY?
