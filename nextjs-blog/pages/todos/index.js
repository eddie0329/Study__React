import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  console.log(res);
  return {
    props: {
      todos: res.data,
    },
  };
}

export default function Todos({ todos }) {
  return (
    <section>
      <h2>Todos</h2>
      <ul>
        <li>
          {todos.map((todo) => (
            <h4 key={todo.id}>{todo.title}</h4>
          ))}
        </li>
      </ul>
    </section>
  );
}
