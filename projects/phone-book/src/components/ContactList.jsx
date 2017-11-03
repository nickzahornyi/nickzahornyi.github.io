import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleContact } from '../actions';

import { deleteContact } from '../actions';

import { setFilter } from '../actions';

import Contact from './Contact.jsx';

import styles from './ContactList.sass';

@connect(mapStateToProps, { toggleContact, deleteContact })
export default class ContactList extends Component {
  render() {
    const { viewType } = this.props;

    return (
      <div className={viewType === 'GRID' ? styles.grid : styles.base}>
        {this.props.contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            mail={contact.mail}
            liked={contact.liked}
            viewType={viewType}
            onToggle={() => this.props.toggleContact(contact.id)}
            onDelete={() => this.props.deleteContact(contact.id)}
          />
        ))}
      </div>
    );
  }
}

function getVisibleContacts(contacts, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return contacts;

    case 'SHOW_LIKED':
      return contacts.filter(contact => contact.liked);
  }
}

function mapStateToProps(state) {
  return {
    contacts: getVisibleContacts(state.contacts, state.filter),
    viewType: state.viewType
  };
}
