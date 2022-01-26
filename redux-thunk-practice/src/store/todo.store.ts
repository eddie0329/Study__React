import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiManager } from '../services/index.service';
import { ITodo } from '../types/todo';

function getTodo(): Promise<ITodo[]> {
  return apiManager.get('todos/');
}

export const fetchTodos = createAsyncThunk<ITodo[]>('todo/fetchTodos', async () => {
  const response = await getTodo();
  return response;
});

interface TodoInitialState {
  todos: ITodo[];
}

const initialState: TodoInitialState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    });
  }
});

export default todoSlice.reducer;
