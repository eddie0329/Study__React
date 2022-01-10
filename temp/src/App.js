import "./App.css";
import Search from "./components/Search";
import PropsTest from "./components/PropsTest";
import Wrapper from "./components/Wrapper";
import Conditional from "./components/Conditional";
import Todo from "./Todo/Todo";

function App() {
  return (
    <div className="App">
      {/* <Search />
      <Wrapper>
        <PropsTest name="eddie" />
      </Wrapper>
      <Conditional /> */}
      <Todo />
    </div>
  );
}

export default App;
