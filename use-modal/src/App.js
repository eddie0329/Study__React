import './App.css';
import React from 'react';
import ModalContainer from './custom-hooks/ModalContainer';
import useModal from './custom-hooks/useModal';

const test1 = ({ options, resolve, reject }) => {
  const { title } = options;

  const onResolve = () => {
    resolve("HELLO WORLD");
  };

  return (
    <div className="modal">
      <div className="content">
        <h1>HELLO { title }</h1>
        <button onClick={onResolve}>resolve</button>
      </div>
    </div>
  );
}

function App() {
  const { push } = useModal();

  const onClick = async () => {
    const a = await push(test1, { title: 'Eddie' })
    console.log("HELLO", a);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>HELLO</button>
      </header>
      <ModalContainer />
    </div>
  );
}

export default App;
