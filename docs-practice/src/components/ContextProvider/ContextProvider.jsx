import React from "react";
import Child1 from "./Child1";
import ThemeContext, { themes } from "./ThemeContext";

const ContextProvider = () => {
  return (
    <section>
      <h1>ThemeContext Provider</h1>
      <ThemeContext.Provider value={themes.dark}>
        <Child1 />
      </ThemeContext.Provider>
    </section>
  );
};

export default ContextProvider;
