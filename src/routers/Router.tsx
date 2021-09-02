import { Calendar, Home, Select } from "pages";
import React from "react";
// import PropTypes from 'prop-types'
import { Route, Switch } from "react-router-dom";
import { RouterConstants } from "./RouterConstants";

const Router = () => {
  return (
    <Switch>
      <Route exact path={RouterConstants.main}>
        <Home />
      </Route>
      <Route exact path={RouterConstants.select}>
        <Select />
      </Route>
      <Route exact path={RouterConstants.calendar}>
        <Calendar />
      </Route>
    </Switch>
  );
};

Router.propTypes = {};

export default Router;
