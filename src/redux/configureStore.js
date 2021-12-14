import {
<<<<<<< HEAD
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import missionReducer from './missions/missions';

const reducer = combineReducers({
  missionReducer,
  // additional reducers could be added here
});

const composed = compose(applyMiddleware(thunkMiddleware, logger));

const store = createStore(
  reducer,
  composed,
=======
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rockets from './rockets/rockesSlice';

const reducer = combineReducers({
  missions: missionsReducer,
  rockets,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger)),
>>>>>>> rockets-fetch
);

export default store;
