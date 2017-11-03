import React, { Component } from 'react';
import { connect } from 'react-redux';

import BalanceItem from './BalanceItem.jsx';
import ChartPie from '../Chart/ChartPie.jsx';
import ChartGraph from '../Chart/ChartGraph.jsx';
import { List } from 'react-mdl';

import { setFilter, setSort, showChart } from '../../actions';

@connect(mapStateToProps)
export default class Balance extends Component {
  render() {
    if (this.props.chart === 'PIE') {
      return <ChartPie balance={this.props.initialBalance} />;
    } else if (this.props.chart === 'GRAPH') {
      return <ChartGraph balance={this.props.initialBalance} />;
    } else {
      return (
        <List>
          {this.props.balance.map(item => (
            <BalanceItem
              key={item.id}
              name={item.name}
              icon={item.icon}
              sum={item.sum}
              type={item.type}
              date={item.date}
            />
          ))}
        </List>
      );
    }
  }
}

function filterItems(balance, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return balance;

    case 'SHOW_INCOME':
      return balance.filter(item => item.type !== 'income');

    case 'SHOW_EXPEND':
      return balance.filter(item => item.type !== 'expend');
  }
}

function sortItems(balance, sort) {
  switch (sort) {
    case 'SORT_BY_DATE':
      return balance.slice().sort((a, b) => b['id'] - a['id']);

    case 'SORT_BY_VALUE':
      return balance.slice().sort((a, b) => a['sum'] - b['sum']);
  }
}

function mapStateToProps(state) {
  const filteredBalance = filterItems(state.balance, state.filter);
  const sortedBalance = sortItems(filteredBalance, state.sort);

  return {
    initialBalance: state.balance,
    balance: sortedBalance,
    chart: state.chart
  };
}
