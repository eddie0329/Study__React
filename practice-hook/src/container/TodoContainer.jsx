import React, { useReducer } from 'react';
import TodoContext from '../context/TodoContext';
import TodoReducer from '../reducer/TodoReducer';
import Todos from "../components/Todos";


function TodoContainer() {
  const {initialState, todoReducer} = TodoReducer;
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return(
    <TodoContext.Provider value={{state, dispatch}}>
      <Todos />
    </TodoContext.Provider>
  );

}

export default TodoContainer;