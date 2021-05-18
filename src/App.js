import React, { useState } from "react";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import Dashboard from "./screens/Dashboard/Dashboard";
import OrgDashboard from "./screens/OrgDashboard/OrgDashboard";
import ActivityStatus from "./screens/ActivityStatus/ActivityStatus";
import EmployeeReport from "./screens/EmployeeReport/EmployeeReport";
import ProjectDashboard from "./screens/ProjectDashboard/ProjectDashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  const [tasks, setTasks] = useState([
    {
      id: "Task 1",
      name: "Gather Project Requirements",
      description: "Decide on the features of the project, make SRS document",
      start: "2021-05-11",
      end: "2021-05-15",
      progress: 100,
      dependencies: "",
    },
    {
      id: "Task 2",
      name: "Gather Development and Design Team",
      start: "2021-05-16",
      end: "2021-05-17",
      progress: 50,
      dependencies: "",
    },
    {
      id: "Task 3",
      name: "Determine System Specifications and Requirements",
      start: "2021-05-18",
      end: "2021-05-20",
      progress: 50,
      dependencies: "",
    },
    {
      id: "Task 4",
      name: "Start Phase 1 Development",
      start: "2021-05-21",
      end: "2021-05-28",
      progress: 0,
      dependencies: "",
    },
    {
      id: "Task 5",
      name: "Test Phase 1 Development",
      start: "2021-05-29",
      end: "2021-05-31",
      progress: 0,
      dependencies: "Task 4",
    },
  ]);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/OrgDashboard" component={OrgDashboard} />
          <Route
            exact
            path="/ActivityStatus"
            component={ActivityStatus}
            tasks={tasks}
            setTasks={setTasks}
          />
          <Route exact path="/EmployeeReport" component={EmployeeReport} />
          <Route
            exact
            path="/ProjectDashboard"
            component={ProjectDashboard}
            tasks={tasks}
            setTasks={setTasks}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
