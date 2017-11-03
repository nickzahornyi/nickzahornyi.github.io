import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSort, showChart } from '../../actions';

@connect(mapStateToProps, mapDispatchToProps)
export default class ControlsSortLink extends Component {
  render() {
    const { activeSort, icon, onClick } = this.props;

    if (activeSort) {
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
    activeSort: ownProps.sort === state.sort
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setSort(ownProps.sort));
      dispatch(showChart(''));
    }
  };
}
