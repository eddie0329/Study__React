import React, {useState} from 'react';
import RegularForm from './container/RegularForm';
import HookForm from './container/HookForm';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <RegularForm />
      <HookForm />
    </div>
  );
}

export default App;
