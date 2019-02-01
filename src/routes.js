import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NowWhat from './components/NowWhat';
import Dashboard from './components/Dashboard';

const routes = (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/nowwhat" component={NowWhat} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default routes;
