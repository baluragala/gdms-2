import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import TryCatch from "./TryCatch";

ReactDOM.render(
  <TryCatch>
    <App />
  </TryCatch>,
  document.getElementById("root")
);
registerServiceWorker();
