import StyledButton from "./components/StyledButton";
import StyledText from "./components/StyledText";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <StyledText>Hello World</StyledText>
      <StyledButton>Click Me!</StyledButton>
      <Todos />
    </div>
  );
}

export default App;
