import React from "react";
import ReactDOM from "react-dom";
import TodoContextProvider from "./todoContext";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
