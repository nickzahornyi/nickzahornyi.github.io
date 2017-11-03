import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addContact } from '../actions';

import styles from './AddContact.sass';

@connect(undefined, { addContact })
export default class AddContact extends Component {
  constructor() {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handleContactAdd = this.handleContactAdd.bind(this);
    this.handleCheckEmail = this.handleCheckEmail.bind(this);
  }

  state = {
    name: '',
    mail: '',
    error: false
  };

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleMailChange(e) {
    this.setState({
      mail: e.target.value
    });
  }

  handleContactAdd() {
    if (this.handleCheckEmail(this.state.mail)) {
      this.props.addContact(this.state.name, this.state.mail);
      this.setState({ name: '', mail: '', error: false });
    } else {
      this.setState({ error: true });
      return false;
    }
  }

  handleCheckEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.leftbox}>
          <input
            className={styles.input}
            type="text"
            placeholder="Введите имя..."
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            className={this.state.error ? styles.error : styles.second}
            type="text"
            placeholder="Введите e-mail..."
            value={this.state.mail}
            onChange={this.handleMailChange}
          />
        </div>
        <div className={styles.rightbox}>
          <button
            className={styles.add__button}
            disabled={!this.state.name || !this.state.mail}
            onClick={this.handleContactAdd}
          >
            Создать
          </button>
        </div>
      </div>
    );
  }
}
