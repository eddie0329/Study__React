import React from "react";

function PropsTest({ name, age }) {
  return (
    <ul>
      <li>{name}</li>
      <li>{age}</li>
    </ul>
  );
}

PropsTest.defaultProps = {
  name: "sam",
  age: 20,
};

export default PropsTest;
