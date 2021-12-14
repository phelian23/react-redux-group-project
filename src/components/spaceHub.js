import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import MyProflie from './myProfile';
import MissionsPage from './missions/missionsPage';

const SpaceHub = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/missions">
        <MissionsPage />
      </Route>
      <Route path="/myprofile">
        <MyProflie />
      </Route>
    </Switch>
  </div>
);

export default SpaceHub;
