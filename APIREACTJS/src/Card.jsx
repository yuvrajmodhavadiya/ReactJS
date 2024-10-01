export default function Card(props) {
  return (
    <div>
      <h3 className="title">{props.title}</h3>
      <p className="body">{props.body}</p>
    </div>
  );
}
