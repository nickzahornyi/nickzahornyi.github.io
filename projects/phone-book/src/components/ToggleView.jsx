import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleView } from '../actions';

import styles from './ToggleView.sass';

@connect(mapStateToProps, mapDisplatchToProps)
export default class FilterLink extends Component {
  render() {
    const { active, children, onClick } = this.props;

    if (active) {
      return <span className={styles.active}>{children}</span>;
    }

    return (
      <span className={styles.root} onClick={onClick}>
        {children}
      </span>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.viewType === state.viewType
  };
}

function mapDisplatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(toggleView(ownProps.viewType))
  };
}
