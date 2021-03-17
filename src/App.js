import React from "react";
import LandingScreen from "./screens/LandingScreen/LandingScreen"; 
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;