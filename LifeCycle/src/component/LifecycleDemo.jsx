// import { useState, useEffect } from "react";

// const LifecycleDemo = () => {
//   // Component Did Mount
//   useEffect(() => {
//     console.log("Component Did Mount");
//     return () => {
//       console.log("Component Will Unmount");
//     };
//   }, []);

//   // Component Did Update
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component Did Update");
//   }, [count]);

//   return (
//     <div>
//       <h1>Component Lifecycle Demo</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );
// };

// export default LifecycleDemo;

import { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Component Lifecycle Demo</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;
