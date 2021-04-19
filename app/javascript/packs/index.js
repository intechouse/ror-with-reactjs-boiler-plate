import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "../App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Route path="/" render={(props) => <App {...props} />} />
    </Router>,

    document.body.appendChild(document.createElement("div"))
  );
});
