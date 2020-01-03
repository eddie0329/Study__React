import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Spring } from "react-spring/renderprops";

function App() {
  return (
    <div className="App">
      <Spring config={{friction: 1000}} from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => <div style={props}>hello</div>}
      </Spring>
    </div>
  );
}

export default App;
