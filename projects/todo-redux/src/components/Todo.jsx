import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Tooltip } from 'antd';
import EditTodo from '../containers/EditTodo.jsx';

import styles from './Todo.less';

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      editing: false
    };
  }

  renderTodo = () => {
    const {
      text,
      completed,
      onToggle,
      onDelete,
      startDate,
      endDate
    } = this.props;
    return (
      <div
        className={completed ? styles.completed : styles.root}
        style={
          `${moment(endDate).diff(moment(), 'days')}` < 0
            ? { borderLeft: '3px solid red' }
            : {}
        }
        onClick={onToggle}
      >
        <i className="material-icons">
          {completed ? 'check_box' : 'check_box_outline_blank'}
        </i>
        <p>{text}</p>
        <div className={styles.dates}>
          <Tooltip
            title={`days left: ${moment(endDate).diff(moment(), 'days')}`}
            placement="bottom"
          >
            {`${startDate} - ${endDate}`}
          </Tooltip>
        </div>
        <button className={styles.edit} onClick={this.handleEdit}>
          <i className="material-icons">edit</i>
        </button>
        <button className={styles.delete} onClick={onDelete}>
          <i className="material-icons">delete</i>
        </button>
      </div>
    );
  };

  render = () => {
    const { text, id } = this.props;
    return !this.state.editing ? (
      this.renderTodo()
    ) : (
      <EditTodo text={text} id={id} onFinishEditing={this.handleFinishEditig} />
    );
  };

  handleEdit = e => {
    e.stopPropagation();

    this.setState({
      editing: true
    });
  };

  handleFinishEditig = () => {
    this.setState({
      editing: false
    });
  };
}

Todo.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  completed: PropTypes.bool,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func
};

export default Todo;
