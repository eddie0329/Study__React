/* IMPORT */
import React, {ReactElement} from 'react'
/* HOOK */
import {useTodoController} from '../hooks/controller/useTodoController';
/* COMPONENT */
import TodoInput from '../components/todos/TodoInput';
import TodoItem from '../components/todos/TodoItem';


export default function Todos(): ReactElement {
  const {loading, state, addTodo, modifyTodo, deleteTodo} = useTodoController(true)

  if (loading) return <h1>LOADING...</h1>

  return (
    <section>
      <h1>Todos</h1>
      <TodoInput addTodo={addTodo} />
      {state?.map(info => <TodoItem key={info.id} todoInfo={info} modifyTodo={modifyTodo} deleteTodo={deleteTodo} />)}
    </section>
  )
}