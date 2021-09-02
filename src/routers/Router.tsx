import { Home } from "pages";
import React from "react";
// import PropTypes from 'prop-types'
import { Route, Switch } from "react-router-dom";
import { RouterConstants } from "./RouterConstants";

const Router = () => {
  return (
    <Switch>
      <Route path={RouterConstants.main}>
        <Home />
      </Route>
    </Switch>
  );
};

Router.propTypes = {};

export default Router;
