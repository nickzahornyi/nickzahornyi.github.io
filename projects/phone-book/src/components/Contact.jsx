import React, { Component } from 'react';

import styles from './Contact.sass';

export default class Contact extends Component {
  render() {
    const { name, mail, liked, onToggle, onDelete, viewType } = this.props;

    return (
      <div className={viewType === 'GRID' ? styles.grid : styles.root}>
        <div className={styles.leftbox}>
          <p>{name}</p>
          <span>{mail}</span>
        </div>
        <div className={styles.rightbox}>
          <a className={styles.mail__button} href={`mailto:${mail}`}>
            Написать
          </a>
          <span className={styles.delete} onClick={onDelete}>
            {' '}
            x{' '}
          </span>
          <span
            className={liked ? styles.liked : styles.check}
            onClick={onToggle}
          />
        </div>
      </div>
    );
  }
}
