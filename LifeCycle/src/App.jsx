import { Component } from "react";
import "./App.css";
import Student from "./component/Student";
// import Demo from "./Demo";
// import ClassDemo from "./ClassDemo";
// import Counter from "./component/Counter";
// import Counter1 from "./component/Counter1";
// import LifecycleDemo from "./component/LifecycleDemo";
// import MyComponent from "./component/MyComponent";

export default class App extends Component {
  constructor() {
    console.log("Constructor Calling");

    super();
    this.state = {
      // Counter: 0
      show: true,
      message: "Hello",
    };
  }

  componentDidMount() {
    console.log("Component Did Mount Calling");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate Calling");
  }
  // increment() {
  //   this.setState({ Counter: this.state.Counter + 2 });
  // }

  // componentWillUnmount() {
  //   console.log("Component Will Unmount Calling");
  // }
  render() {
    console.log("Render Calling");
    // const name = "XYZZ vZ";
    return (
      <div>
        {/* <h1>Class Component Counter</h1>
        <Counter number={this.state.Counter} /> */}

        {/* <h1>Functional Component Counter</h1>x
        <Counter1 number={this.state.Counter} /> */}
        {/* <button
          onClick={() => {
            this.increment();
          }}
        >
          Click Me
        </button> */}
        {/* <button onClick={this.increment.bind(this)}>Click Me</button> */}

        {this.state.show ? <Student /> : <h1>Removed</h1>}
        {this.state.message}
        <br />
        <br />
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child Component
        </button>
        <button onClick={() => this.setState({ message: "Himil" })}>
          Click Me
        </button>

        <hr />
        <hr />

        {/* <Demo name={name} age="25" /> */}
        <hr />
        <hr />
        {/* <ClassDemo name={name} age="65" /> */}
      </div>
    );
  }
}
