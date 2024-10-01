import { useEffect, useState } from "react";

export default function GetDataUser() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((result) => result.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const getData = () => {};

  return (
    <>
      <h1>Get Data </h1>
      <form action="">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <button onClick={getData}>Add Data</button>
      </form>
      <br />
      <br />

      <table>
        <tr>
          <td>Name</td>
          <td>Age</td>
        </tr>

        {data.map((item) => (
          <>
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
}
