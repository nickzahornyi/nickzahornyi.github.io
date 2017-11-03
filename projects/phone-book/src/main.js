import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import ContactApp from './components/ContactApp.jsx';

import store from './store';

import 'normalize.css';
import './assets/main.css';

ReactDOM.render(
  <Provider store={store}>
    <ContactApp />
  </Provider>,
  document.getElementById('root')
);
