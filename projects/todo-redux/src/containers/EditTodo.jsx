import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { DatePicker, LocaleProvider, Button } from 'antd';
const { RangePicker } = DatePicker;
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.css';

import { editTodoWrapper } from '../actions';

import styles from './EditTodo.less';

function mapDisplatchToProps(dispatch) {
  return {
    onEditTodo: (id, value, startDate, endDate) =>
      dispatch(editTodoWrapper(id, value, startDate, endDate))
  };
}

@connect(undefined, mapDisplatchToProps)
export default class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      id: this.props.id,
      clear: true,
      startDate: '',
      endDate: '',
      datesDiff: 0
    };
  }

  componentDidMount = () => this.textInput.select();

  render() {
    return (
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          value={this.state.text}
          onChange={this.handleOnChange}
        />
        <LocaleProvider locale={enUS}>
          <RangePicker className={styles.data} onChange={this.onChange} />
        </LocaleProvider>
        <p className={styles.datesDiff}>{this.state.datesDiff} day(s)</p>
        <Button
          type="normal"
          size="default"
          className={styles.button}
          onClick={this.handleEditTodo}
        >
          Save
        </Button>
      </form>
    );
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleEditTodo = e => {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.onEditTodo(
        this.state.id,
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
      this.props.onFinishEditing();
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

EditTodo.propTypes = {
  id: PropTypes.number,
  onEditTodo: PropTypes.func,
  onFinishEditing: PropTypes.func,
  text: PropTypes.string
};
