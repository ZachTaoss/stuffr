import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CharacterProvider } from "./util/content";

ReactDOM.render(
  <React.StrictMode>
    <CharacterProvider>
      <Router>
        <App />
      </Router>
    </CharacterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
