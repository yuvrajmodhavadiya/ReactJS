import { useEffect, useState } from "react";
// let items = [{ name: "Raj", password: 213456789 }];
export default function Crud() {
  const [items, setItems] = useState(() => {
    const storedData = localStorage.getItem("itemData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
    gender: ""
  });
  const [edit, setEdit] = useState(null);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    localStorage.setItem("itemData", JSON.stringify(items));
  });

  const handleAddData = () => {
    if (inputValue.name === "") {
      alert("Please enter a name");
    } else if (inputValue.name.length <= 2) {
      alert("Please Enter More Than 2 Character");
    } else if (inputValue.password === "") {
      alert("Please Enter Password");
    } else if (inputValue.password.length < 8) {
      alert("Please Enter Password more than 8 Characters!");
    } else if (!inputValue.gender) {
      alert("Please Select one Value");
    } else if (!isChecked) {
      alert("Please Accept Terms and Conditions");
    } else {
      setItems([...items, inputValue]);
      console.log(inputValue);

      setInputValue({
        name: "",
        password: "",
        gender: ""
      });

      console.log("CheckBox Value " + isChecked);

      setEdit(null);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleEdit = (index) => {
    setEdit(index);
    setInputValue(items[index]);
  };

  const handleSaveData = () => {
    const updatedData = [...items];
    updatedData[edit] = inputValue;
    setItems(updatedData);
    setInputValue({ name: "", password: "", gender: "" });
    setEdit(null);
  };

  const handleDelete = (index) => {
    const updatedData = [...items];
    updatedData.splice(index, 1);
    setItems(updatedData);
  };

  return (
    <>
      <h2>Crud Operation</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={inputValue.name}
        name="name"
        onChange={handleInput}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={inputValue.password}
        name="password"
        onChange={handleInput}
      />
      <br />
      <br />
      <input
        type="radio"
        name="gender"
        id="male"
        value="male"
        onChange={handleInput}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        id="female"
        value="female"
        onChange={handleInput}
      />
      <label htmlFor="female">Female</label>
      <br />
      <br />
      <input
        type="checkbox"
        name="terms"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        id="check"
      />
      <label htmlFor="check">Accept Terms and Conditions</label>
      <br />
      <br />
      {edit === null ? (
        <button onClick={() => handleAddData()}>Add Data</button>
      ) : (
        <button onClick={handleSaveData}>Save Changes</button>
      )}
      {items.length > 0 ? (
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>{item.gender}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
}
