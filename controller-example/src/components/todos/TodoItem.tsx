import React, {ReactElement} from 'react'
import type {Todo} from '../../api/modules/TodoService'

interface TodoItemProps {
  todoInfo: Todo
  deleteTodo: (id: number) => void
  modifyTodo: (id: number) => void
}

export default function TodoItem({todoInfo, deleteTodo, modifyTodo}: TodoItemProps): ReactElement {
  return (
    <div>
      <span>{todoInfo.id}</span>
      <strong>{todoInfo.title}</strong>
      <input type="checkbox" checked={todoInfo.completed} onClick={() => modifyTodo(todoInfo.id)} />
      <button onClick={() => deleteTodo(todoInfo.id)}>X</button>
    </div>
  )
}
