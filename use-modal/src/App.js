import './App.css';
import useModal from './custom-hooks/useModal.jsx';


function App() {
  const { push, pop } = useModal();
  const onClick = () => { push() };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>CLICK ME</button>
      </header>
    </div>
  );
}

export default App;
