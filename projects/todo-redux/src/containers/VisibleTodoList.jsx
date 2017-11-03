import { connect } from 'react-redux';

import { toggleTodoWrapper, deleteTodoWrapper } from '../actions';

import { getVisibleTodos } from '../selectors';

import TodoList from '../components/TodoList.jsx';

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state)
  };
}

const mapDispatchToProps = {
  onToggleTodo: toggleTodoWrapper,
  onDelete: deleteTodoWrapper
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
