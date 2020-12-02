import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello name="react" color="pink" isSpecial />
      <Hello color="blue" isSpecial={false} />
      <Counter />
      <InputSample />
      <UserList />
    </Wrapper>
  );
}

export default App;
