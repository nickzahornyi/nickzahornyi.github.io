export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const SET_FILTER = 'SET_FILTER';

export const addTodo = (text, startDate, endDate) => ({
  type: ADD_TODO,
  id: Date.now(),
  text,
  startDate,
  endDate
});

export const addTodoWrapper = (text, startDate, endDate) => dispatch => {
  ga('send', 'event', 'todo', 'add_todo', 'Todo was added!');
  dispatch(addTodo(text, startDate, endDate));
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const toggleTodoWrapper = id => dispatch => {
  ga('send', 'event', 'todo', 'toggle_todo', 'Todo status was changed!');
  dispatch(toggleTodo(id));
};

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const deleteTodoWrapper = id => dispatch => {
  ga('send', 'event', 'todo', 'delete_todo', 'Todo was deleted!');
  dispatch(deleteTodo(id));
};

export const editTodo = (id, text, startDate, endDate) => {
  return {
    type: EDIT_TODO,
    id,
    text,
    startDate,
    endDate
  };
};

export const editTodoWrapper = (id, text, startDate, endDate) => dispatch => {
  ga('send', 'event', 'todo', 'edit_todo', 'Todo was edited!');
  dispatch(editTodo(id, text, startDate, endDate));
};

export const completeAll = () => ({
  type: COMPLETE_ALL
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});
