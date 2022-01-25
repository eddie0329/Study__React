import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/counter';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>count: { count }</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(-100))}>RESET</button>
    </div>
  );
}

export default App;
