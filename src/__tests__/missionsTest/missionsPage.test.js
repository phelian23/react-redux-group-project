import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../redux/configureStore';
import SpaceHub from '../../components/spaceHub';

describe('Mission page rendering', () => {
  test('Mission', () => {
    render(<Provider store={store}><Router><SpaceHub /></Router></Provider>);
    fireEvent.click(screen.getByText('Missions'));
    const text = screen.getByText(/Description/i);

    expect(text).toBeInTheDocument();
  });
  test('My profile', () => {
    render(<Provider store={store}><Router><SpaceHub /></Router></Provider>);
    fireEvent.click(screen.getByText('My Profile'));
    const text = screen.getByText('My Missions');

    expect(text).toBeInTheDocument();
  });
});
