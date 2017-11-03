import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions';

let favouritesAmount = JSON.parse(localStorage.getItem('favourites'));

if (!favouritesAmount) {
  favouritesAmount = [];
  localStorage.setItem('favourites', favouritesAmount);
}

const favourites = (state = favouritesAmount, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES: {
      const newFavourites = [action.movie[0], ...state];
      localStorage.setItem('favourites', JSON.stringify(newFavourites));
      return newFavourites;
    }

    case REMOVE_FROM_FAVOURITES: {
      const newFavourites = state.filter(
        movie => action.movie[0].id !== movie.id
      );
      localStorage.setItem('favourites', JSON.stringify(newFavourites));
      return newFavourites;
    }

    default:
      return state;
  }
};

export default favourites;
