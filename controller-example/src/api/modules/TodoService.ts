import BasicService from './BasicService';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default class TodoService extends BasicService {
  constructor() {
    super('http://localhost:8080/todos');
  }

  getTodos(): Promise<Todo[]> {
    return this.api.get('/')
  }

  addTodo(title: string): Promise<boolean> {
    return this.api.post('/addTodo', {title})
  }

  deleteTodo(id: number): Promise<boolean> {
    return this.api.post('/deleteTodo', {id})
  }

  modifyTodo(id: number): Promise<boolean> {
    return this.api.post('/modifyTodo', {id})
  }
}