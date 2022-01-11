import React, { useContext} from "react";
import ThemeContext from "./ThemeContext";

const Child3 = () => {
  const { foreground, background } = useContext(ThemeContext);

  return (
    <h1 style={{ color: foreground, background }}>HELLO WORLD</h1>
  );
}

export default Child3;
