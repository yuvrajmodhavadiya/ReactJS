import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { add, dec } from "./action";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);

  return (
    <>
      <h1>Counter</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={() => dispatch(add(5))}>Inc</button>
      <button onClick={() => dispatch(dec(5))}>Dec</button>
    </>
  );
}

export default App;
