import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NowWhat from './components/NowWhat';
import Dashboard from './components/Dashboard';
import Chart from './components/Chart';

const routes = (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/nowwhat" component={NowWhat} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/chart" component={Chart} />
  </Switch>
);

export default routes;
