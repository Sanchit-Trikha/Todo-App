// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Input from "./components/Todonput";
function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <h1 className="heading">TODO</h1>
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
