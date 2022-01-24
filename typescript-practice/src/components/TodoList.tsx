import { useState } from "react";
import Todo from "./Todo";
import { ITodo } from "../types/Todo";

const temp: ITodo[] = [
  { id: 1, title: "Hello World1", completed: false },
  { id: 2, title: "Hello World2", completed: true },
  { id: 3, title: "Hello World3", completed: true },
  { id: 4, title: "Hello World4", completed: false },
  { id: 5, title: "Hello World5", completed: false },
  { id: 6, title: "Hello World6", completed: true },
  { id: 7, title: "Hello World7", completed: false },
];

const TodoList = () => {
  const [todos] = useState<ITodo[]>(temp);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
