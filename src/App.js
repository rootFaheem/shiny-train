import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Macfa App</p>
        <p>Line added from feature branch</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          App is deployed using Travis CI pipeline.
        </a>
      </header>
    </div>
  );
}

export default App;
