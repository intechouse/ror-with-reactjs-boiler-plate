import { createBrowserHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import Main from "../javascript/main";

const history = createBrowserHistory({});

const App = (props) => {
  console.log("App, Props are: ", props);

  return (
    <Router history={history}>
      <Main history={history} />
    </Router>
  );
};

export default App;
