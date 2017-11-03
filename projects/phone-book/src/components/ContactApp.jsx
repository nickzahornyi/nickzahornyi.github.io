import React, { Component } from 'react';

import ContactList from './ContactList.jsx';
import AddContact from './AddContact.jsx';
import Filter from './Filter.jsx';
import ViewList from './ViewList.jsx';

import styles from './ContactApp.sass';

export default class ContactApp extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <h2 className={styles.header}>Phone</h2>

          <div className={styles.app}>
            <AddContact />
            <Filter />
            <ViewList />
            <ContactList />
          </div>
        </div>
      </div>
    );
  }
}
