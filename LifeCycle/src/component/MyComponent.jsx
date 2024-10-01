// import { Component } from "react";

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   componentDidMount() {
//     console.log("Component Did Mount");

//     this.interval = setInterval(() => {
//       this.setState({ count: this.state.count + 1 });
//     }, 1000);
//   }

//   componentDidUpdate() {
//     console.log("Update");
//   }

//   componentWillUnmount() {
//     console.log("Component Will Unmount");

//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//       </div>
//     );
//   }
// }

// export default MyComponent;

import  { Component } from "react";

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
    this.state = {
      message: "Hello, World!"
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount called");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
  }

  render() {
    console.log("Render called");
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.setState({ message: "Hello Himil" });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}

export default LifecycleExample;
