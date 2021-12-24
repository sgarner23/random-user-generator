import React from "react";
import ReactDOM from "react-dom";
import { UsersStore } from "./store/usersStore";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <UsersStore>
      <App />
    </UsersStore>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
