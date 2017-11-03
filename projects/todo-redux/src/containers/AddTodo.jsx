import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { DatePicker, LocaleProvider, Button, Tooltip } from 'antd';
const { RangePicker } = DatePicker;
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.css';

import { addTodoWrapper, completeAll } from '../actions';

import styles from './AddTodo.less';
import Input from '../components/Input.jsx';

function mapDisplatchToProps(dispatch) {
  return {
    onAddTodo: (value, startDate, endDate) =>
      dispatch(addTodoWrapper(value, startDate, endDate)),
    onCompleteAll: () => dispatch(completeAll())
  };
}

@connect(undefined, mapDisplatchToProps)
export default class AddTodo extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      clear: true,
      startDate: '',
      endDate: '',
      datesDiff: 0
    };
  }

  render() {
    return (
      <form className={styles.form}>
        <Tooltip title="Complete all tasks" placement="bottom">
          <div className={styles.check} onClick={this.props.onCompleteAll}>
            <i className="material-icons">check</i>
          </div>
        </Tooltip>
        <Input
          clear={this.state.clear}
          onEnter={this.handlSetText}
          placeholder="What needs to be done?"
        />
        <LocaleProvider locale={enUS}>
          <RangePicker className={styles.data} onChange={this.onChange} />
        </LocaleProvider>
        <p className={styles.datesDiff}>{this.state.datesDiff} day(s)</p>
        <Button
          type="normal"
          size="default"
          className={styles.button}
          onClick={this.handleAddTodo}
        >
          Add Todo
        </Button>
      </form>
    );
  }

  handlSetText = text => {
    this.setState({
      text,
      clear: false
    });
  };

  handleAddTodo = e => {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.onAddTodo(
        this.state.text,
        this.state.startDate,
        this.state.endDate
      );
      this.setState({
        text: '',
        clear: true,
        startDate: '',
        endDate: '',
        datesDiff: 0
      });
    }
  };

  onChange = (date, dateString) => {
    const diff = moment(dateString[1]).diff(moment(dateString[0]), 'days');
    this.setState({
      startDate: dateString[0],
      endDate: dateString[1],
      datesDiff: diff
    });
  };
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func,
  onCompleteAll: PropTypes.func
};
