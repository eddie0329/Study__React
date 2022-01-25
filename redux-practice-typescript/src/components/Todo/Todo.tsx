import React from "react";
import { useDispatch } from 'react-redux';
import { ITodo, updateTodoComplete, deleteTodo } from "../../store/todo/index.store";

const Todo: React.FC<ITodo> = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  
  const onChangeComplete = () => {
    dispatch(updateTodoComplete(id));
  };

  return (
    <div>
      <strong>{title}</strong>
      <input type='checkbox' checked={completed} onChange={onChangeComplete} />
      <button onClick={() => dispatch(deleteTodo(id))}>X</button>
    </div>
  );
};

export default Todo;
