import React, { useState, useCallback } from 'react';

const Todo = ({ todo, changeTodoCompleted }) => {

  return (
    <article>
      <span><strong>{ todo.title }</strong></span>
      <input type='checkbox' checked={todo.completed} onChange={changeTodoCompleted} />
    </article>
  );
};

export default Todo;
