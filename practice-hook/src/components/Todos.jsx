import React, {useContext, useState, useCallback, useMemo} from 'react';
import TodoContext from '../context/TodoContext';

function TodoInput({ dispatch }) {
  const [text, setText] = useState('');

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  
  const addTodo = useCallback(() => {
    if (text === '') return;
    dispatch({ type: 'add', value: text});
    setText('');
  }, [text, dispatch]);
  
  const onEnter = useCallback((e) => {
    if (e.charCode !== 13) return;
    addTodo();
  }, [addTodo]);

  return (
    <div>
      <input value={text} onChange={onChange} onKeyPress={onEnter} />
      <button onClick={addTodo}>ADD</button>
    </div>
  );
}

function Todo({ value, dispatch }) {
  const title = useMemo(() => value?.title ?? '', [value]);
  const id = useMemo(() => value?.id ?? 0, [value]);

  const deleteTodo = useCallback(() => {
    dispatch({ type: 'delete', id });
  }, [dispatch, id]);

  return (
    <div>
      <em>{title}</em>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}

function Todos() {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <section>
      <h1>TODOS</h1>
      <TodoInput dispatch={dispatch} />
      {state.todos.map(todo => <Todo key={todo.id} dispatch={dispatch} value={todo} />)}
    </section>
  );
}

export default Todos;