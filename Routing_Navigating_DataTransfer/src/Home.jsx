import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  }); // Initialize an array to hold user objects

  const navigate = useNavigate();

  const aboutBTN = () => {
    // Navigate to about with all user data
    navigate("/about", { state: { Data: users } });
  };

  const handleForm = (e) => {
    e.preventDefault();
    // Update users state with the new entry
    setUsers([...users, { name: name, email: email }]);
    console.log(name, email);
    setName(""); // Clear input fields after submission
    setEmail(""); // Clear input fields after submission
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(users));
  });

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <button onClick={aboutBTN} disabled={users.length === 0}>
        About
      </button>
    </div>
  );
}
