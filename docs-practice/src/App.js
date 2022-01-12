import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2/Test2';
import Test3 from './components/Test3/Test3';
import ContextProvider from './components/ContextProvider/ContextProvider';
import ReducerTest from './components/reducer/ReducerTest';
import ReducerContextProvider from './components/ReducerContextProvider/ReducerContextProvider';
import Conditional from './components/Conditional/Conditional';
import InputTest from './components/Input/InputTest';
import Iteration from './components/Iteration/Iteration';

function App() {
  return (
    <div className="App">
      <Test1 />
      <Test2 />
      <Test3 />
      <ContextProvider />
      <ReducerTest />
      <ReducerContextProvider />
      <Conditional />
      <InputTest />
      <Iteration />
    </div>
  );
}

export default App;
