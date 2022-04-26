import { useState, useRef, useCallback } from 'react';
import TodoItem from './TodoItem';
import _debounce from 'lodash/debounce';
import {custom_debounce} from '../custom_debounce';

const _todos = [
  { id: 0, title: 'hello', completed: false },
  { id: 1, title: 'hello', completed: true },
  { id: 2, title: 'hello', completed: true },
  { id: 3, title: 'hello', completed: false }
];

const TodoList = () => {
  const id = useRef(4);
  const todoInputRef = useRef();
  const [todos, setTodos] = useState(_todos);
  const [todoInput, setTodoInput] = useState('');

  const onChange = (e) => {
    setTodoInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (todoInput === '') return; /* guard */
    setTodos(prev => [...prev, { id: id.current, title: todoInput, completed: false }]);
    setTodoInput('');
    id.current++;
  };

  const onRemove = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={todoInputRef} onChange={onChange} />
        <button type="submit">SUBMIT</button>
      </form>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />)}
    </div>
  );
};

export default TodoList;
