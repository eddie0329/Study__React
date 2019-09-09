import { todoApp } from './reducers';
import { createStore } from 'redux';
import { addTodo, completeTodo } from './action';

const store = createStore(todoApp);
console.log('store:',store);

console.log('store.getState()', store.getState());



export default store;