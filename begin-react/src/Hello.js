import React from "react";

function Hello({ name, color, isSpecial }) {
  return (
    <div style={{ color }}>
      <b>{isSpecial ? "speical" : "unspecial"}</b>
      {isSpecial ? <b>*</b> : null}
      {isSpecial && <b>*</b>}
      Hi, {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름 없음",
};

export default Hello;
