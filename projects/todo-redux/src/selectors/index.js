import { createSelector } from 'reselect';

export const getFilter = state => state.filter;

export const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
  getTodos,
  getFilter,
  (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;

      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);

      case 'SHOW_NEW':
        return todos.filter(todo => !todo.completed);
    }
  }
);

export const isFilterActive = (state, filter) => getFilter(state) === filter;
