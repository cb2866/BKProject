import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app/App";
// import store from "./app/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <Router>
    {/* <Provider store={store}> */}
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </Router>
);
