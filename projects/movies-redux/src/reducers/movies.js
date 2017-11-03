import { REQUEST_MOVIES, RECEIVE_MOVIES } from '../actions';

const movies = (
  state = { isFetching: false, items: [], search: '', page: 1, totalPages: 1 },
  action
) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: true,
        search: action.movie,
        page: action.page
      };

    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        totalPages: action.movies.total_pages,
        items:
          state.page === 1
            ? [...action.movies.results]
            : [...state.items, ...action.movies.results]
      };

    default:
      return state;
  }
};

export default movies;
