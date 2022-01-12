import React from 'react';

const Todo = ({ todo, setTodo }) => {

  const onChange = () => {
    todo.completed = !todo.completed;
  }

  return (
    <article>
      <span><strong>{ todo.title }</strong></span>
      <input type='checkbox' value={todo.completed} onChange={onChange} />
    </article>
  );
};

export default Todo;
