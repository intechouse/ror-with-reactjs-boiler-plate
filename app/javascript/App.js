import { createBrowserHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "../javascript/main";
import { store } from "./store/configureStore";
import { verifyCredentials } from "./store/redux-token-auth-config";

const history = createBrowserHistory({});
verifyCredentials(store);

const App = (props) => {
  console.log("App, Props are: ", props);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Main history={history} />
      </Router>
    </Provider>
  );
};

export default App;
