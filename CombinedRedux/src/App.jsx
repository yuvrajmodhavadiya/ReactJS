import "./App.css";
import Counter from "./redux/Counter";
import Display from "./redux/Display";
import Input from "./redux/Input";

function App() {
  return (
    <>
      <h1>Redux</h1>
      <Counter />
      <hr />
      <Input />
      <Display />
    </>
  );
}

export default App;
