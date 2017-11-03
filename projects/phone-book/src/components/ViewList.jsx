import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToggleView from './ToggleView.jsx';

import styles from './ViewList.sass';

export default class ViewList extends Component {
  render() {
    return (
      <div className={styles.root}>
        <ToggleView viewType="LIST">
          <img src="/images/list.png" />
        </ToggleView>
        <ToggleView viewType="GRID">
          <img src="/images/grid.png" />
        </ToggleView>
      </div>
    );
  }
}
