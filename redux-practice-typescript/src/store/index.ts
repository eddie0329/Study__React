import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/index.store';
import todoReducer from './todo/index.store';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store
