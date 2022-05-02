import { useState, memo, useCallback } from 'react';
import Title from './Title';

const TodoItem = memo(({ todoInfo, onRemove, onChange }) => {
  return (
    <article>
      <span>{todoInfo.id}<b>{todoInfo.title}</b></span>
      <input type={'checkbox'} checked={todoInfo.completed} onChange={() => onChange(todoInfo.id)} />
      <button onClick={() => onRemove(todoInfo.id)}>X</button>
    </article>
  );
});

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    { id: 0, title: 'hello world1', completed: false },
    { id: 1, title: 'hello world2', completed: true },
    { id: 2, title: 'hello world3', completed: true },
    { id: 3, title: 'hello world4', completed: false },
  ]);

  const onRemove = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const onChange = useCallback((id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }, []);

  return (
    <section>
      <Title message="Hello Todo" />
      {todos.map(todo => <TodoItem key={todo.id} todoInfo={todo} onRemove={onRemove} onChange={onChange} />)}
    </section>
  );
}

export default TodoContainer;
