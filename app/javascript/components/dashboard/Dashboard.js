import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer } from "@coreui/react";
import { connect } from "react-redux";

import Modals from "../modals/Modals";
import Tables from "../tables/Tables";
import DashboardContent from "./DashboardContent";
import { isLoggedInSelector } from "../../store/selectors/authSelector";
import { DASHBOARD, HOME, MODALS, TABLES } from "../../routes/routing";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Dashboard = (props) => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          {props.isLoggedIn && (
            <Switch>
              <Route
                path={DASHBOARD}
                render={() => <DashboardContent {...props} />}
              />
              <Route path={MODALS} render={() => <Modals {...props} />} />
              <Route path={TABLES} render={() => <Tables {...props} />} />
              <Redirect from={HOME} to={DASHBOARD} />
            </Switch>
          )}
        </Suspense>
      </CContainer>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log("Dashboard, Map State to Props: ", state);
  const isLoggedIn = isLoggedInSelector(state);
  return {
    isLoggedIn,
  };
};

export default connect(mapStateToProps)(Dashboard);
