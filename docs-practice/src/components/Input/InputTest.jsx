import React, { useState } from "react";

const InputTest = () => {
  const [textInput, setInput] = useState('');

  return (
    <section>
      <h1>Input Test</h1>
      <h2>TextInput: {textInput}</h2>
      <input value={textInput} onChange={(e) => setInput(e.target.value)} />
    </section>
  );
};

export default InputTest;
