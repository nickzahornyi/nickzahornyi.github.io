import { GET_GENRES } from '../actions';

const genres = (state = [], action) => {
  switch (action.type) {
    case GET_GENRES:
      return action.genres.genres;

    default:
      return state;
  }
};

export default genres;
