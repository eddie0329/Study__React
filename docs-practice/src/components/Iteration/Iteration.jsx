import React, { useState, useCallback } from "react";
import Todo from "./Todo";

const _todos = [
  { title: "title1", completed: true },
  { title: "title2", completed: false },
  { title: "title3", completed: true },
];

const Iteration = () => {
  const [todos, setTodos] = useState(_todos);

  // const changeTodoCompleted = useCallback((index) => {
  //   setTodos(todos.map((todo, _index) => {
  //     if (index === _index) todo.completed = !todo.completed;
  //     return todo;
  //   }));
  // }, [todos]);

  const changeTodoCompleted = (index) => {
    setTodos(todos.map((todo, _index) => {
      if (index === _index) todo.completed = !todo.completed;
      return todo;
    }));
  }

  return (
    <>
      <section>
        <span>{ JSON.stringify(todos) }</span>
        <h1>Iteration</h1>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} changeTodoCompleted={() => changeTodoCompleted(index)} />
        ))}
        <button onClick={() => console.log(todos)}>CLICKME</button>
      </section>
    </>
  );
};

export default Iteration;
