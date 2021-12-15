import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Rocket from '../../components/Rocket';
import store from '../../redux/configureStore';

describe('Check if all components are rendered', () => {
  test('Renders Reserve Rocket button', () => {
    render(<Provider store={store}><BrowserRouter><Rocket /></BrowserRouter></Provider>);
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
  });
});
