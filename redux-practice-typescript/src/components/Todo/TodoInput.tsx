import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todo/index.store';

const TodoInput: React.FC = () => {
  const [todoInput, setTodoInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodoInput(e.target.value);
  const insertTodo = () => {
    dispatch(addTodo(todoInput));
    setTodoInput('');
  }

  return (
    <div>
      <input value={todoInput} onChange={handleChange}/>
      <button onClick={insertTodo}>ENTER</button>
    </div>
  );
};

export default TodoInput;