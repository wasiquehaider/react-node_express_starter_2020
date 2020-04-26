import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Avengers from "./components/avengers/avengers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Avengers />
      </header>
    </div>
  );
}

export default App;
