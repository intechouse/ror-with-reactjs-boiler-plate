import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer } from "@coreui/react";

import Modals from "../modals/Modals";
import Tables from "../tables/Tables";
import DashboardContent from "./DashboardContent";

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
          <Switch>
            <Route
              path="/home/dashboard"
              render={() => <DashboardContent {...props} />}
            />
            <Route path="/home/modals" render={() => <Modals {...props} />} />
            <Route path="/home/tables" render={() => <Tables {...props} />} />
            <Redirect from="/home" to="/home/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default Dashboard;
