import React from "react";

function LiTodo({ todo, removeTodo, editDone }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => editDone(todo.id)}
        checked={todo.isDone}
      />
      <span>{todo.value}</span>
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  );
}

export default LiTodo;
