import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import MyProflie from './myProfile';

const SpaceHub = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/myprofile">
        <MyProflie />
      </Route>
    </Switch>
  </div>
);

export default SpaceHub;
