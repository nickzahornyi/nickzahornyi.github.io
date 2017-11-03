import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(mapStateToProps)
export default class HeaderBalance extends Component {
  constructor() {
    super();

    this.handleGetTotalBalance = this.handleGetTotalBalance.bind(this);
  }
  render() {
    return (
      <p className="header__count">
        {this.handleGetTotalBalance(this.props.balance)}
      </p>
    );
  }

  handleGetTotalBalance(balance) {
    const calculetedSum = balance.reduce((sum, current) => {
      return current.type === 'income' ? sum + current.sum : sum - current.sum;
    }, 0);
    return calculetedSum;
  }
}

function mapStateToProps(state) {
  return {
    balance: state.balance
  };
}
