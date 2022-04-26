import { memo } from 'react';

const TodoItem = ({ todo, onRemove }) => {
  console.log(todo);
  return (
    <article>
      <span>Id. {todo.id}
        <b>{todo.title}</b>
      </span>
      <input type='checkbox' checked={todo.completed} readOnly={true} />
      <button onClick={() => onRemove(todo.id)}>X</button>
    </article>
  );
};

export default memo(TodoItem);
