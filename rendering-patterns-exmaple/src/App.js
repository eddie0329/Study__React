import Title from "./components/Title";
import Title2 from "./components/Title2";
import TemperatureConverter from "./components/TemperatureConverter";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";


function App() {
  return (
    <div className="App">
      <Title render={() => <h1>Hello Title!</h1>} />
      <Title2>{(name) => <h1>Hello {name}</h1> }</Title2>
      <TemperatureConverter
        render={(value) => (
          <>
            <Fahrenheit value={value} />
            <Kelvin value={value} />
          </>
        )}
      />
    </div>
  );
}

export default App;
