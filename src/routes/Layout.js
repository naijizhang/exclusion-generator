import React from "react";
import { Route, Redirect, Switch } from "react-router";
import Home from "../pages/Home";

export default () => (
  <Switch>
    <Route exact path="/home" name="home" component={Home} />
    <Redirect from="*" to="/home" />
  </Switch>
);
