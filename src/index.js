import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
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
=======
import './style/index.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header';
import Misssions from './pages/Missions';
import Profile from './pages/Profile';
import RocketsPage from './pages/RocketsPage';
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
          <Route exact path="/">
            <RocketsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
>>>>>>> rockets-fetch
  </React.StrictMode>,
  document.getElementById('root'),
);
