import { useMemo } from 'react';
import useServices from '../hooks/useServices';
import useFetch from '../hooks/useFetch';

const Todo = ({ todoInfo }) => {
  const id = useMemo(() => todoInfo?.id ?? 0, [todoInfo]);
  const title = useMemo(() => todoInfo?.title ?? '', [todoInfo]);
  const completed = useMemo(() => todoInfo?.completed ?? false, [todoInfo]);

  return (
    <article>
      <h3>{id}. {title}</h3>
      <span>
        <b>Completed:</b>
        <input type='checkbox' value={completed} />
      </span>
    </article>
  );
};

const Home = () => {
  const services = useServices();
  const { loading, data: todos = [] } = useFetch(services.todo.getTodos);

  if (loading) return <div><h1>LOADING...</h1></div>

  return (
    <div>
      <h1>Hello Home</h1>
      { todos.map(todo => <Todo key={todo.id} todoInfo={todo} />)}
    </div>
  );
};

export default Home;
