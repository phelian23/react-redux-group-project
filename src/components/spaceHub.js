import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import MyProflie from './myProfile';

const SpaceHub = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>
      <Route path="/myprofile">
        <MyProflie />
      </Route>
    </Switch>
  </div>
);

export default SpaceHub;
