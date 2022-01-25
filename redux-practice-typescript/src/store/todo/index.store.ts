import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

interface ITodoState {
  id: number;
  todos: ITodo[];
}

const temp: ITodo[] = [
  { id: 1, title: "Hello World1", completed: true },
  { id: 2, title: "Hello World2", completed: false },
  { id: 3, title: "Hello World3", completed: false },
  { id: 4, title: "Hello World4", completed: true },
  { id: 5, title: "Hello World5", completed: false },
];

const initialState: ITodoState = {
  id: 6,
  todos: temp,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.unshift({ id: state.id++, title: action.payload, completed: false });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodoComplete: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload) return todo;
        else {
          todo.completed = !todo.completed;
          return todo;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodoComplete } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
