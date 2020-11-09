import React from "react";

function Hello({ name, color }) {
  return <div style={{ color }}>Hi, {name}</div>;
}

Hello.defaultProps = {
  name: "이름 없음",
};

export default Hello;
