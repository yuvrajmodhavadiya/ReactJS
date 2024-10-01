import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();

  const homeBTN = () => {
    navigate("/");
  };

  // Check if location.state exists
  const initialData = location.state?.Data || [];
  const [data, setData] = useState(initialData);

  // Add states for editing
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  // Function to delete a user
  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  // Function to set the edit state
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(data[index].name);
    setEditEmail(data[index].email);
  };

  // Function to update a user
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUsers = data.map((user, index) =>
      index === editIndex ? { name: editName, email: editEmail } : user
    );
    setData(updatedUsers);
    localStorage.setItem("data", JSON.stringify(updatedUsers));
    setEditIndex(null); // Reset edit index
    setEditName(""); // Clear the name field
    setEditEmail(""); // Clear the email field
  };

  return (
    <div>
      <h1>About</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data && data.length > 0 ? (
            data.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>
                No Data Available, Please go back to the Home Page
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {editIndex !== null && (
        <div>
          <h2>Edit User</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Edit Name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Edit Email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Update</button>
            <button onClick={() => setEditIndex(null)}>Cancel</button>
          </form>
        </div>
      )}
      <br />
      <br />
      <button onClick={homeBTN}>Home</button>
    </div>
  );
}
