import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import { authenticationRoutes } from './authenticationRoutes';
import { unAuthenticationRoutes } from './unAuthenticatedRoutes';
import { authenticatedRoutes } from './authenticatedRoutes';
import Page404 from '../pages/Page404';
import { isLoggedInSelector } from '../store/selectors/authSelector';

const Routes = (props) => {
  console.log('Routes: ', props);
  return (
    <Switch>
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

      {!props.isLoggedIn &&
        authenticationRoutes.map((route, id) => {
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

      {props.isLoggedIn &&
        authenticatedRoutes.map((route, id) => {
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

const mapStateToProps = (state) => {
  console.log('Routes, Map State to Props: ', state);
  const isLoggedIn = isLoggedInSelector(state);
  return {
    isLoggedIn
  };
};

export default connect(mapStateToProps)(Routes);
