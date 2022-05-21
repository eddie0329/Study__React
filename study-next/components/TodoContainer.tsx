import React from 'react';
import services from '../api';
import {Todo} from '../api/todos';
import {useQuery} from 'react-query';

const TodoItem: React.FC<Todo> = ({id, title, completed}) => {
  return (
    <li>
      <span>{id}. {title}</span>
      <input type={'checkbox'} checked={completed} />
    </li>
  );
}

const TodoContainer: React.FC = () => {
  const {data: todos} = useQuery('todos', services.todos.getTodos);
  return (
    <main>
      <h2>TodoContainer</h2>
      <ul>
        {todos?.map(todo => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </main>
  );
}

export default TodoContainer;
