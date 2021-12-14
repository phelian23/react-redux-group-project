import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import SpaceHub from './components/spaceHub';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SpaceHub />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
