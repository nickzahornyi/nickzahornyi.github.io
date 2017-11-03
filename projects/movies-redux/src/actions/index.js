import api from '../api';

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const GET_GENRES = 'GET_GANRES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export const requestMovies = (movie, page) => ({
  type: REQUEST_MOVIES,
  movie,
  page
});

export const receiveMovies = data => ({
  type: RECEIVE_MOVIES,
  movies: data.data,
  totalPages: data.total_pages
});

export const fetchMovies = (movies, page = 1) => dispatch => {
  dispatch(requestMovies(movies, page));

  return api
    .getMovies(movies, page)
    .then(response => dispatch(receiveMovies(response)));
};

export const receiveGenres = genres => ({
  type: GET_GENRES,
  genres
});

export const fetchGenres = () => dispatch => {
  return api.getGenres().then(data => dispatch(receiveGenres(data)));
};

export const addToFavourites = movie => ({
  type: ADD_TO_FAVOURITES,
  movie
});

export const removeFromFavourites = movie => ({
  type: REMOVE_FROM_FAVOURITES,
  movie
});
