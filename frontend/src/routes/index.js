import React, { lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

const Login = lazy(() => import("../views/Auth/Login"));
const Signup = lazy(() => import("../views/Auth/Signup"));

function RenderRoutes() {
  return (
    <Switch>
        <Route
          path={"/"}
          exact={true}
          render={props => (<Login {...props}/>) }
        />
        <Route
          path={"/signup"}
          exact={true}
          render={props => (<Signup {...props}/>) }
        />
        <Route
          path={"*"}
          exact={true}
          render={props => (<div {...props}>No page Found</div>) }
        />
    </Switch>
  )
}

export default withRouter(RenderRoutes)