import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NowWhat from './components/NowWhat';
import Dashboard from './components/Dashboard';
import Chart from './components/Chart';
import Map from './components/Map';

const routes = (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/nowwhat" component={NowWhat} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/chart" component={Chart} />
    <Route path="/map" component={Map} />
  </Switch>
);

export default routes;
