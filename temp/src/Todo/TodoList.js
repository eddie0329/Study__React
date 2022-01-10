import React from "react";

function TodoList({ todos, renderTodo }) {
  return <ul>{renderTodo(todos)}</ul>;
}

export default TodoList;
