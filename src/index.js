import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import SpaceHub from './components/spaceHub';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SpaceHub />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  /* import './style/index.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header';
import Misssions from './pages/Missions';
import Profile from './pages/Profile';

import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/missions">
            <Misssions />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>, */
  document.getElementById('root'),
);
