import { createStore, compose } from 'redux';
import reducer from './reducers/index';

// This is midleware with DevTools connection
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// This method is create a store
const configureStore = (preloadedState) =>
  createStore(reducer, preloadedState, composeEnhancers());

const store = configureStore({});

export default store;
