import React from "react";

function Wrapper({ children }) {
  const style = {
    padding: "10px",
    border: "1px solid red",
    color: "red",
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
