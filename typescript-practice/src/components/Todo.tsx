import React from 'react';
import { ITodo } from '../types/Todo';
import CheckBox from './CheckBox';

const Todo: React.FC<ITodo> = ({ id, title, completed }) => {
  return (
    <li>
      <strong style={{ marginLeft: '4px' }}>{ title }</strong>
      <CheckBox checked={completed} />
    </li>
  );
};

export default Todo;
