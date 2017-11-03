import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from './containers/App';

import store from './store';

import 'normalize.css';
import './assets/main.sass';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
