import React, { useState, useCallback } from "react";
import { createTodoTemplate } from "./data";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const onChange = ({ target: { value } }) => {
    setText(value);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (text === "") return;
      addTodo(createTodoTemplate(text));
      setText("");
    },
    [text, addTodo]
  );

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChange} />
      <button type="submit">Enter</button>
    </form>
  );
}

export default TodoInput;
