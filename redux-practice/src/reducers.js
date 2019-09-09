import { ADD_TODO, COMPLETE_TODO } from "./action";

export function todos(previousState, action) {
  if (previousState === undefined) {
    return [];
  }
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, completed: false }];
  }
  if (action.type === COMPLETE_TODO) {
    const newState = [];
    for (let i = 0; i < previousState.length; i++) {
      newState.push(
        i === action.index
          ? { ...previousState, completed: true }
          : { ...previousState[i] }
      );
    }
    return newState;
  }

  return previousState;
}

export function filter(previousState, action) {
    if (previousState === undefined) {
        return 'show_all';
    }
    return previousState;
}

export function todoApp(previousState = {}, action) {
    return {
        todos: todos(previousState.todos, action),
        filter: filter(previousState.filter, action),
    };
}