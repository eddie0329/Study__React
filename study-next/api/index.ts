import createPostServices from './posts';
import createTodoServices from './todos';

type ServicesName = 'posts' | 'todos';

const createServices = () => {
  const constructor = {
    posts: createPostServices,
    todos: createTodoServices,
  };
  const instances = new Map();
  const getInstance = (name: ServicesName) => {
    if (!instances.get(name)) instances.set(name, constructor[name]());
    return instances.get(name);
  };
  return {
    get posts(): ReturnType<typeof createPostServices> {
      return getInstance('posts');
    },
    get todos(): ReturnType<typeof createTodoServices> {
      return getInstance('todos');
    }
  };
};

const services = createServices();

export default services;