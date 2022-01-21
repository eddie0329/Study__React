import { useMemo } from "react";
import withLoader from "./hoc/withLoader";

const Todo = ({ todo }) => {
  const title = useMemo(() => todo?.title ?? "", [todo]);
  const completed = useMemo(() => todo?.completed ?? false, [todo]);

  return (
    <li>
      <span style={{ textDecoration: "bold", marginRight: "4px" }}>
        {title}
      </span>
      <input type="checkbox" checked={completed} onChange={() => {}} />
    </li>
  );
};

const Todos = ({ data, fetchData }) => {
  return (
    <section style={{ marginTop: '20px' }}>
      <button onClick={fetchData}>Refecth Data</button>
      <ul>
        {data?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default withLoader(Todos, "todos");
