import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Prefix from "./pages/Prefix";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Prefix} />
        <Route exact path="/home" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
