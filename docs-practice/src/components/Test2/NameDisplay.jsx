import React from 'react';

const NameDisplay = ({ name }) => {
  return (
    <h2>{ name } <br />
      <span>{ name === 'eddie' ? "Hello" : "HI"}</span>
    </h2>
  );
}

export default NameDisplay;
