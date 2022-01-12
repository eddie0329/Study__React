import React, { useState } from "react";
import Todo from "./Todo";

const _todos = [
  { title: "title1", completed: true },
  { title: "title2", completed: false },
  { title: "title3", completed: true },
];

const Iteration = () => {
  const [todos, setTodos] = useState(_todos);

  return (
    <>
      <section>
        <span>{ JSON.stringify(todos) }</span>
        <h1>Iteration</h1>
        {todos.map((todo) => (
          <Todo key={todo.title} todo={todo} setTodos={setTodos} />
        ))}
      </section>
    </>
  );
};

export default Iteration;
