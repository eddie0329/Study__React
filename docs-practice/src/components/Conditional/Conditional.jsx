import React, { useState, useMemo } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

const Conditional = () => {
  const [count, setCount] = useState(0);

  const isFirst = useMemo(() => count % 3 === 0, [count]);
  const isSecond = useMemo(() => count % 3 === 1, [count]);
  const isThird = useMemo(() => count % 3 === 2, [count]);

  return (
    <section>
      <h1>Conditional</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        PLUS
      </button>
      <h3 style={{ color: isFirst ? "red" : "black" }}>
        isFirst: {`${isFirst}`}
      </h3>
      <h3 style={{ color: isSecond ? "red" : "black" }}>
        isSecond: {`${isSecond}`}
      </h3>
      <h3 style={{ color: isThird ? "red" : "black" }}>
        isThird: {`${isThird}`}
      </h3>
    </section>
  );
};

export default Conditional;
