import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./authContext";

export default ({ component: Component, ...routeProps }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      render={props =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
      {...routeProps}
    />
  );
};
