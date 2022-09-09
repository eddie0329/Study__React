import Counter from '../components/Counter'
import Todo from '../components/Todo'

export default function Container() {
  return (
    <div>
      <Counter />
      <Todo title="hello" />
    </div>
  )
}