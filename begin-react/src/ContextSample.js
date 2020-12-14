import React, { createContext, useContext, useState } from "react";

const MyContext = createContext("defaultValue");

function Child() {
  const text = useContext(MyContext);
  return <div>HI? {text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  const [value, setValue] = useState(true);

  const onClick = () => {
    setValue(!value);
  };
  return (
    <MyContext.Provider value={value ? "GOOD" : "BAD"}>
      <GrandParent text="GOOD" />
      <button onClick={onClick}>CLICK</button>
    </MyContext.Provider>
  );
}

export default ContextSample;
