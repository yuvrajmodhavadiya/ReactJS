import { Component } from "react";

export default class Student extends Component {
  componentWillUnmount() {
    // alert("ComponentWillUnmount Calling");
    console.log("Component Will Unmounting");
  }
  render() {
    return (
      <>
        <h1>Student Component</h1>
      </>
    );
  }
}
