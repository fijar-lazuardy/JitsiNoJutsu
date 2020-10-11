import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Home";
import Prefix from "./pages/Prefix";
import { checkAuth } from "./utils/auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Prefix} restricted={false} />
        <PrivateRoute exact path="/home" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() && restricted ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
