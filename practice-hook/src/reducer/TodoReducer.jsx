const initialState = { todos: [], };

let id = 100;

const createTodo = (title) => {
  id++;
  return {
    id,
    title,
  }
};

function todoReducer(state, action) {
  switch(action.type)  {
    case 'add':
      const { value } = action;
      return { todos: [...state.todos, createTodo(value)] };
    case 'delete':
      const { id } = action;
      return { todos: state.todos.filter(todo => todo.id !== id) };
    default:
      throw new Error();
  }
}

const options = { initialState, todoReducer };

export default options;
