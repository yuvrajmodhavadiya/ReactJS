import { useState, useEffect } from "react";
import { app } from "./firebase";
import "./App.css";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

function App() {
  const firestore = getFirestore(app);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const querySnapshot = await getDocs(collection(firestore, "user"));
      const userData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(userData);
    };
    fetchUser();
  }, [firestore]);

  const submitForm = async (e) => {
    e.preventDefault();
    await addDoc(collection(firestore, "user"), {
      name: name,
      email: email
    });
    setName("");
    setEmail("");
  };

  const deleteData = async (id) => {
    await deleteDoc(doc(firestore, "user", id));
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateData = async (id, newName, newEmail) => {
    await updateDoc(doc(firestore, "user", id), {
      name: newName,
      email: newEmail
    });
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { id, name: newName, email: newEmail };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  };

  return (
    <>
      <h1>FireStore</h1>
      <form action="" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      {users.map((user) => (
        <div key={user.id}>
          <li>
            {user.name} {user.email}
          </li>
          <button onClick={() => deleteData(user.id)}>Delete</button>
          <button
            onClick={() =>
              updateData(
                user.id,
                prompt("Enter new name:"),
                prompt("Enter new email:")
              )
            }
          >
            Update
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
