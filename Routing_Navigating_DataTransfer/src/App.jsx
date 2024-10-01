import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
