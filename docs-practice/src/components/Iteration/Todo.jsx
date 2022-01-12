import React, { useState, useCallback } from 'react';

const Todo = ({ todo, changeTodoCompleted }) => {
  const [completed, setCompleted] = useState(todo.completed)

  const changeTodoCompleted2 = useCallback(() => {
    todo.completed = !todo.completed;
    setCompleted(prev => !prev);
  }, [todo]);

  return (
    <article>
      <span><strong>{ todo.title }</strong></span>
      <input type='checkbox' checked={completed} onChange={changeTodoCompleted2} />
    </article>
  );
};

export default Todo;
