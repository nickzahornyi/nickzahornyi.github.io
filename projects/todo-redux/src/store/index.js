import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getLocalData = todos => JSON.parse(localStorage.getItem(todos)) || {};

const saveLocalData = store => next => action => {
  next(action);
  localStorage.setItem('todos', JSON.stringify(store.getState()));
};

export default createStore(
  rootReducer,
  getLocalData('todos'),
  composeEnhancers(applyMiddleware(thunk, saveLocalData))
);
