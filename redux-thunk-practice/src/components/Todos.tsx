import React, { useEffect } from "react";
import { fetchTodos } from "../store/todo.store";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Todos: React.FC = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <section>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Todos;
