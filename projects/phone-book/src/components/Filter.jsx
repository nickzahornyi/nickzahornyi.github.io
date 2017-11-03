import React, { Component } from 'react';

import FilterLink from './FilterLink.jsx';

import styles from './Filter.sass';

export default class Filter extends Component {
  render() {
    return (
      <div className={styles.root}>
        <FilterLink filter="SHOW_ALL">Все</FilterLink>
        <FilterLink filter="SHOW_LIKED">Избранные</FilterLink>
      </div>
    );
  }
}
