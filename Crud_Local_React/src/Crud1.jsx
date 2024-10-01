import { useEffect, useState } from "react";

export default function Crud1() {
  const [items, setItems] = useState(() => {
    const storedData = localStorage.getItem("Data");
    return storedData ? storedData : [];
  });
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
  });
  const handleAddData = () => {
    if (inputValue.name === "") {
      alert("Please Enter Name");
    } else if (inputValue.password === "") {
      alert("Please Enter Password");
    } else {
      setItems([...items, inputValue]);
      console.log(inputValue);
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(items));
  });
  return (
    <div>
      <input
        type="text"
        name="name"
        value={inputValue.name}
        onChange={handleInput}
      />
      <input
        type="text"
        name="password"
        value={inputValue.password}
        onChange={handleInput}
      />
      <button onClick={handleAddData}>Add Data</button>
    </div>
  );
}
