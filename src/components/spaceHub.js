import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import Proflie from '../pages/Profile';
import MissionsPage from './missions/missionsPage';
import RocketsPage from '../pages/RocketsPage';

const SpaceHub = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/missions">
        <MissionsPage />
      </Route>
      <Route path="/myProfile">
        <Proflie />
      </Route>
      <Route exact path="/">
        <RocketsPage />
      </Route>
    </Switch>
  </div>
);

export default SpaceHub;
