import { useDispatch, useSelector } from "react-redux";
import { add, dec } from "./actions";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  return (
    <>
      <h2>Counter</h2>
      <h3>Counter : {counter}</h3>
      <button onClick={() => dispatch(add(5))}>Add</button>
      <button onClick={() => dispatch(dec(10))}>Add</button>
    </>
  );
}
