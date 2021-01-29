import React from "react";
import ReactDOM from "react-dom";
import TodoContextProvider from "./TodoContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
