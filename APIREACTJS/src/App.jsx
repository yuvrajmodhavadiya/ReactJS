import { useEffect, useState } from "react";
import { API, UserAPI } from "./API";
import "./App.css";
import Card from "./Card";
import UserCard from "./UserCard";
import GetDataUser from "./GetDataUser";

function App() {
  const [data, setData] = useState(null);
  
  const [title, setTitle] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    API().then((post) => setData(post));
  }, []);

  useEffect(() => {
    UserAPI()
      .then((data) => {
        console.log(data);

        // console.log(data.results[0].name.title);
        // console.log(data.results[0].name.first);
        // console.log(data.results[0].name.last);

        // console.log(data.results[0].picture.medium);

        setTitle(data.results[0].name.title);
        setFirst(data.results[0].name.first);
        setLast(data.results[0].name.last);
        setImg(data.results[0].picture.large);
      })
      .catch((err) => console.log(err));
  }, []);

  const refresh = () => {
    UserAPI()
      .then((data) => {
        setTitle(data.results[0].name.title);
        setFirst(data.results[0].name.first);
        setLast(data.results[0].name.last);
        setImg(data.results[0].picture.medium);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <GetDataUser />
      <br />
      <br />
      {<UserCard /> && (
        <UserCard title={title} first={first} last={last} img={img} />
      )}
      <button onClick={refresh}>Refresh</button>
      <h1>JSON SERVER</h1>
      {/* {data ? (
        <ul>
          {data.map((e) => {
            return (
              <div key={e.id} className="post">
                <li className="title">Title : {e.title}</li>
                <li className="body">Body : {e.body}</li>
              </div>
            );
          })}
        </ul>
      ) : (
        <p>No Data</p>
      )} */}

      {data ? (
        data.map((e) => <Card title={e.title} body={e.body} key={e.id} />)
      ) : (
        <p>No Data</p>
      )}
    </>
  );
}

export default App;
