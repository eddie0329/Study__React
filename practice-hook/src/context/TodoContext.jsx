import React from 'react';
import TodoReducer from '../reducer/TodoReducer';

const { initialState } = TodoReducer;

const TodoContext = React.createContext();

export default TodoContext;
