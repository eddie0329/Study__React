import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../../store/todo/index.store";
import TodoInput from "./TodoInput";
import Todo from "./Todo";

const Todos: React.FC = () => {
  const todos = useSelector(selectTodos);

  return (
    <section>
      <h1>Todos</h1>
      <TodoInput />
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </section>
  );
};

export default Todos;
