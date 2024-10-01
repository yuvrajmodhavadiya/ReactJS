import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function Counter1({ number }) {
  useEffect(() => {
    console.log("Func Comp Mount");

    return () => {
      console.log("Removed");
    };
  });

  return (
    <>
      <h1>{number}</h1>
    </>
  );
}
