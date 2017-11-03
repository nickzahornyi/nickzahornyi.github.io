import React, { Component } from 'react';

import Header from '../Header/Header.jsx';
import Balance from '../Balance/Balance.jsx';
import Form from '../Form/Form.jsx';
import Controls from '../Controls/Controls.jsx';

import moment from 'moment';
import './App.sass';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Form />
        <Controls />
        <Balance />
      </div>
    );
  }
}
