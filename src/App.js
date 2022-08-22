// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Input from "./components/Todonput";
// import Todolist from "./components/todolist";
// const [input, setinput] = useState([])
function App() {
  // const [todos, settodos] = useState([]);
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <h1 className="heading">TODO</h1>
          {/* <Input  exampleValue="fjkdfkljdf"/> */}
          {/* <form
          todos = {todos}
          settodos = {settodos}>
          </form> */}
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
