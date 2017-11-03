import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showChart } from '../../actions';

@connect(mapStateToProps, mapDispatchToProps)
export default class ControlsChartLink extends Component {
  render() {
    const { activeChart, icon, onClick } = this.props;

    if (activeChart) {
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
    activeChart: ownProps.chart === state.chart
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(showChart(ownProps.chart))
  };
}
