import {usePromiseController} from '../useController';
import {Todo} from '../../api/modules/TodoService';
import service from '../../api';

export const useTodoController = (fetch: boolean) => {
  const controller = usePromiseController<Todo[]>(() => service.todo.getTodos())

  const addTodo = async (title: string) => {
    await service.todo.addTodo(title)
    await controller.reFetch()
  }

  const modifyTodo = async (id: number) => {
    await service.todo.modifyTodo(id)
    await controller.reFetch()
  }

  const deleteTodo = async (id: number) => {
    await service.todo.deleteTodo(id)
    await controller.reFetch()
  }

  return {
    ...controller,
    addTodo,
    modifyTodo,
    deleteTodo,
  }
}
