/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import "./App.css";
import ChildA from "./ChildA";
import Abc from "./Abc";

const data = createContext();
const data1 = createContext();
function App() {
  const name = "Himil";
  const age = 25;
  return (
    <>
      {/* Prop Drilling */}
      {/* props is used to transfer data */}
      <ChildA name={name} />
      {/* Context API */}
      {/* create,provider,consumer */}
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <Abc />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
