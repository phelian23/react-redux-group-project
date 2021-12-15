import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../../components/Rockets';
import MissionsPage from '../../components/missions/missionsPage';
import store from '../../redux/configureStore';

describe('Check if all components are rendered', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Rockets /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Mission page', () => {
    const tree = renderer
      .create(<Provider store={store}><MissionsPage /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
