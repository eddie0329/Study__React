import { apiManager } from './index.service';

export const getTodos = () => {
  return apiManager.get('todos');
}