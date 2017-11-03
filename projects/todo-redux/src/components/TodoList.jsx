import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo.jsx';

export default class TodoList extends Component {
  render() {
    return (
      <div className="base">
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            startDate={todo.startDate}
            endDate={todo.endDate}
            completed={todo.completed}
            onToggle={() => this.props.onToggleTodo(todo.id)}
            onDelete={() => this.props.onDelete(todo.id)}
          />
        ))}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onToggleTodo: PropTypes.func,
  onDelete: PropTypes.func
};
