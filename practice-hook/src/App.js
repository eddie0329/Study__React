import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import TodoContainer from "./container/TodoContainer";

function App() {

  return (
    <div className="App">
      <Counter />
      <hr />
      <br />
      <TodoContainer />
    </div>
  );
}

export default App;
