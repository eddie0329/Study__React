import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import LiTodo from "./LiTodo";
import _cloneDeep from "lodash/cloneDeep";

function Todo() {
  const [todos, setTodos] = useState([{ isDone: true, value: "HELLO", id: 1 }]);

  // addition
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // removal
  const removeTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  // edit
  const editDone = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        const cloned = _cloneDeep(todo);

        if (cloned.id === todoId) cloned.isDone = !cloned.isDone;
        return cloned;
      })
    );
  };

  const renderTodo = (todos) => {
    return todos.map((todo) => (
      <LiTodo
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        editDone={editDone}
      />
    ));
  };

  return (
    <div>
      <h1>Eddie's Todo</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} renderTodo={renderTodo} />
    </div>
  );
}

export default Todo;
