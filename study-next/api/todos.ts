import createApi from './api';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const createTodoServices = () => {
  const api = createApi('https://jsonplaceholder.typicode.com');
  return {
    getTodos: (): Promise<Todo[]> => api.get('/todos'),
  };
};

export default createTodoServices;
