import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "./actions";

export default function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addtodo(input));
    e.target.reset();
  };

  return (
    <>
      <h2>Input</h2>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter TODO"
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add TODO</button>
      </form>
    </>
  );
}
