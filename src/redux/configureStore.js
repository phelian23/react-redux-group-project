import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';
import rockets from './rockets/rockesSlice';

const reducer = combineReducers({
  missionReducer,
  rockets,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
