import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello name="react" color="pink" isSpecial />
      <Hello color="blue" isSpecial={false} />
    </Wrapper>
  );
}

export default App;
