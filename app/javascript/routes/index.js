import React from "react";
import { Route, Switch } from "react-router";

import { authenticationRoutes } from "./authenticationRoutes";
import { unAuthenticationRoutes } from "./unAuthenticatedRoutes";
import { authenticatedRoutes } from "./authenticatedRoutes";
import Page404 from "../pages/Page404";

const Routes = (props) => {
  console.log("Routes: ", props);
  return (
    <Switch>
      {authenticationRoutes.map((route, id) => {
        return (
          route.component && (
            <Route
              key={id}
              path={route.path}
              exact={route.exact}
              name={route.name}
              component={route.component}
            />
          )
        );
      })}

      {unAuthenticationRoutes.map((route, id) => {
        return (
          route.component && (
            <Route
              key={id}
              path={route.path}
              exact={route.exact}
              name={route.name}
              component={route.component}
            />
          )
        );
      })}

      {authenticatedRoutes.map((route, id) => {
        return (
          route.component && (
            <Route
              key={id}
              path={route.path}
              exact={route.exact}
              name={route.name}
              component={route.component}
            />
          )
        );
      })}
      <Route component={Page404} />
    </Switch>
  );
};

export default Routes;
