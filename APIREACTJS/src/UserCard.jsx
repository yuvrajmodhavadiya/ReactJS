/* eslint-disable react/prop-types */
import "./App.css";

export default function UserCard(props) {
  return (
    <>
      <div className="test">
        <div className="IMG">
          <img src={props.img} alt={props.first} width="100%" />
        </div>
        <h2>{props.title}</h2>
        <h3>{props.first}</h3>
        <h3>{props.last}</h3>
      </div>
    </>
  );
}
