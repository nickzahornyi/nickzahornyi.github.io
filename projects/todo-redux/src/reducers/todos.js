import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  COMPLETE_ALL,
  EDIT_TODO
} from '../actions';

function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
        startDate: action.startDate,
        endDate: action.endDate
      };

    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };

    case EDIT_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: false,
        text: action.text,
        startDate: action.startDate,
        endDate: action.endDate
      };

    default:
      return state;
  }
}

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [todo(undefined, action), ...state];

    case TOGGLE_TODO:
      return state.map(item => todo(item, action));

    case DELETE_TODO: {
      const index = state.findIndex(todo => todo.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    case EDIT_TODO:
      return state.map(item => todo(item, action));

    case COMPLETE_ALL:
      return state.map(item => ({
        ...item,
        completed: !state.completed
      }));

    default:
      return state;
  }
}
