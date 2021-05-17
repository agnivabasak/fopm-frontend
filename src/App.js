import React from "react";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import Dashboard from "./screens/Dashboard/Dashboard";
import OrgDashboard from "./screens/OrgDashboard/OrgDashboard";
import ActivityStatus from "./screens/ActivityStatus/ActivityStatus";
import EmployeeReport from "./screens/EmployeeReport/EmployeeReport";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/OrgDashboard" component={OrgDashboard} />
          <Route exact path="/ActivityStatus" component={ActivityStatus} />
          <Route exact path="/EmployeeReport" component={EmployeeReport} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
