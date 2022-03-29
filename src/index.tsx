import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App as AppDnD } from "./AppDnD/App";
import { App as AppVanilla } from "./AppVanilla/App";

ReactDOM.render(
  <React.StrictMode>
    {/*<AppDnD />*/}
    <AppVanilla />
  </React.StrictMode>,
  document.getElementById("root")
);
