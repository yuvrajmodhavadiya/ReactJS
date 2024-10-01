/* eslint-disable react/prop-types */
import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevprops) {
    console.log("PrevProps --> " + prevprops.number);
    console.log("Updated Props --> " + this.props.number);

    if (prevprops.number != +this.props.number) {
      console.log("Component Updated");
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}
