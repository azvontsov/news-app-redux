import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// This is midleware with DevTools connection
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// This method is create a store
const configureStore = (preloadedState) =>
  createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

const store = configureStore({});
sagaMiddleware.run(rootSaga);

export default store;
