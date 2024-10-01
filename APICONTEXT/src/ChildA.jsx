/* eslint-disable react/prop-types */
import ChildB from "./ChildB";

export default function ChildA({ name }) {
  return (
    <div>
      <ChildB name={name} />
    </div>
  );
}
