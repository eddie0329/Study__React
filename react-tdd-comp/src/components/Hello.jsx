export default function Hello({ name }) {
  if (name) return <h1>Hello, {name}.</h1>;
  else return <h1>Hey, stranger!</h1>;
}