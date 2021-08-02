import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/projects" component={Projects} exact />
    </Switch>
  );
};

export default Router;
