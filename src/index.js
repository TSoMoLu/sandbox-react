import React from "react";
import ReactDOM from "react-dom";

import Weather from "./Weather";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1> Weather App </h1>
      <Weather />
      <br />
      <a
        href="https://github.com/TSoMoLu/sandbox-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by Tanimola Somolu
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
