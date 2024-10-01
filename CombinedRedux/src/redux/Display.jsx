import { useSelector } from "react-redux";

export default function Display() {
  const todo = useSelector((state) => state.todo);
  return (
    <>
      <h2>Display</h2>
      {todo.map((ele, index) => {
        return (
          <>
            <li key={index}>{ele}</li>
            <button>Edit</button>
            <button>Delete</button>
          </>
        );
      })}
    </>
  );
}
