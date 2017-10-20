import React from 'react';
import ReactDOM from 'react-dom';

import { Icon } from 'react-mdl';
import './Controls.sass';

const Controls = React.createClass({
  render() {
    return (
      <div className="controls">
        <div>
          <span>Sort: </span>
          <i
            className="material-icons sort active"
            onClick={this.handleSortDate}
          >
            date_range
          </i>
          <i className="material-icons sort" onClick={this.handleSortSum}>
            monetization_on
          </i>
        </div>
        <div>
          <span>Filter: </span>
          <i
            className="material-icons filter active"
            onClick={this.handleFilterAll}
          >
            view_list
          </i>
          <i
            className="material-icons filter"
            onClick={this.handleFilterIncome}
          >
            attach_money
          </i>
          <i
            className="material-icons filter"
            onClick={this.handleFilterExpenditure}
          >
            money_off
          </i>
        </div>
        <div>
          <span>Charts: </span>
          <i className="material-icons" onClick={this.handleChartPieToogle}>
            pie_chart
          </i>
          <i className="material-icons" onClick={this.handleChartGraphToogle}>
            show_chart
          </i>
        </div>
      </div>
    );
  },

  handleFilterAll(e) {
    document
      .querySelectorAll('.filter')
      .forEach(item => item.classList.remove('active'));

    e.target.classList.add('active');
    this.props.onFilter('');
  },
  handleFilterIncome(e) {
    document
      .querySelectorAll('.filter')
      .forEach(item => item.classList.remove('active'));

    e.target.classList.add('active');
    this.props.onFilter('expenditure');
  },
  handleFilterExpenditure(e) {
    document
      .querySelectorAll('.filter')
      .forEach(item => item.classList.remove('active'));

    e.target.classList.add('active');
    this.props.onFilter('income');
  },

  handleSortSum(e) {
    document
      .querySelectorAll('.sort')
      .forEach(item => item.classList.remove('active'));

    e.target.classList.add('active');
    this.props.onSort('sum');
  },
  handleSortDate(e) {
    document
      .querySelectorAll('.sort')
      .forEach(item => item.classList.remove('active'));

    e.target.classList.add('active');

    this.props.onSort('id');
  },

  handleChartPieToogle() {
    this.props.onPieChartToogle('pie');
  },
  handleChartGraphToogle() {
    this.props.onGraphChartToogle('graph');
  },
});

export default Controls;
