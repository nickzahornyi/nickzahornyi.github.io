import React from "react";
import ReactDOM from "react-dom";

import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

import { FABButton, Icon } from "react-mdl";

import "./Header.sass";

const Header = React.createClass({
  getInitialState() {
    return {
      totalSum: 0
    };
  },
  render() {
    return (
      <header className="header">
        <FABButton ripple primary onClick={this.handleAddIncome}>
          <Icon name="add" />
        </FABButton>
        <p className="header__count">{this.state.totalSum}</p>
        <FABButton ripple primary onClick={this.handleAddExpenditure}>
          <Icon name="remove" />
        </FABButton>
      </header>
    );
  },

  componentDidMount() {
    this.handleGetTotalBalance(this.props.balance);
  },

  componentWillReceiveProps(nextProps) {
    this.handleGetTotalBalance(nextProps.balance);
  },

  handleGetTotalBalance(balance) {
    const calculetedSum = balance.reduce((sum, current) => {
      return current.type === "income" ? sum + current.sum : sum - current.sum;
    }, 0);

    this.setState({
      totalSum: calculetedSum
    });
  },

  handleAddIncome() {
    this.props.onShowForm("income");
  },

  handleAddExpenditure() {
    this.props.onShowForm("expenditure");
  }
});

export default Header;
