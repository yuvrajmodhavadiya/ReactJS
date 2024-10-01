import { data, data1 } from "./App";

function Pqr() {
  return (
    <>
      <data.Consumer>
        {(name) => (
          <data1.Consumer>
            {(age) => (
              <h2>
                My name is {name} & My Age is {age}
              </h2>
            )}
          </data1.Consumer>
        )}
      </data.Consumer>
    </>
  );
}

export default Pqr;
