import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFilter, showChart } from '../../actions';

@connect(mapStateToProps, mapDispatchToProps)
export default class ControlsFilterLink extends Component {
  render() {
    const { activeFilter, icon, onClick } = this.props;

    if (activeFilter) {
      return (
        <i className="material-icons active" onClick={onClick}>
          {icon}
        </i>
      );
    }

    return (
      <i className="material-icons" onClick={onClick}>
        {icon}
      </i>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    activeFilter: ownProps.filter === state.filter
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter));
      dispatch(showChart(''));
    }
  };
}
