import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import moment from 'moment';

import { addItem, formType } from '../../actions';

import { Textfield, Icon, Button, RadioGroup, Radio } from 'react-mdl';

import './Form.sass';

@connect(mapStateToProps, { addItem, formType })
export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      sum: '',
      type: '',
      icon: 'money_off',
      expenditureType: 'Other'
    };

    this.handleIncomeAdd = this.handleIncomeAdd.bind(this);
    this.handleExpenditureAdd = this.handleExpenditureAdd.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIconChange = this.handleIconChange.bind(this);
    this.handleSumChange = this.handleSumChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  render() {
    return (
      <div>
        {this.props.editing === 'income' && (
          // <h1>INCOME</h1>
          <form onSubmit={this.handleIncomeAdd}>
            <Textfield
              onChange={this.handleNameChange}
              label="Name"
              value={this.state.name}
            />
            <Textfield
              onChange={this.handleSumChange}
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Input is not a number!"
              label="Sum"
              value={this.state.sum}
            />
            <Button raised colored>
              Add
            </Button>
          </form>
        )}
        {this.props.editing === 'expend' && (
          // <h1>expend</h1>
          <form onSubmit={this.handleExpenditureAdd}>
            <Textfield
              onChange={this.handleNameChange}
              label="Name"
              value={this.state.name}
            />
            <Textfield
              onChange={this.handleSumChange}
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Input is not a number!"
              value={this.state.sum}
              label="Sum"
            />
            <RadioGroup
              container="div"
              childContainer="div"
              name="expenditure"
              onChange={this.handleIconChange}
              value={this.state.icon}
            >
              <Radio value="directions_bike">Entertainment</Radio>
              <Radio value="restaurant">Food</Radio>
              <Radio value="shopping_basket">Purchases</Radio>
              <Radio value="money_off">Other</Radio>
            </RadioGroup>
            <Button raised colored>
              Add
            </Button>
          </form>
        )}
      </div>
    );
  }

  handleNameChange(e) {
    if (e.target.value !== '') {
      this.setState({
        name: e.target.value
      });
    }
  }

  handleIconChange(e) {
    this.setState({
      icon: e.target.value,
      expenditureType: e.target.nextElementSibling.innerText
    });
  }

  handleSumChange(e) {
    if (e.target.value !== '') {
      this.setState({
        sum: e.target.value
      });
    }
  }

  handleIncomeAdd(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: this.state.name,
      sum: parseInt(this.state.sum),
      type: 'income',
      icon: 'attach_money',
      date: moment().format('YYYY-MM-DD HH:mm')
    };
    if (newItem.name !== '' && newItem.sum !== '' && !isNaN(newItem.sum)) {
      this.props.addItem(newItem);
      this.props.formType('');

      this.resetState();
    }
  }

  handleExpenditureAdd(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: this.state.name,
      sum: parseInt(this.state.sum),
      type: 'expend',
      icon: this.state.icon,
      expenditureType: this.state.expenditureType,
      date: moment().format('YYYY-MM-DD HH:mm')
    };

    if (newItem.name !== '' && newItem.sum !== '' && !isNaN(newItem.sum)) {
      this.props.addItem(newItem);
      this.props.formType('');

      this.resetState();
    }
  }

  resetState() {
    this.setState({
      name: '',
      sum: '',
      type: ''
    });
  }
}

function mapStateToProps(state) {
  return {
    editing: state.editing
  };
}
