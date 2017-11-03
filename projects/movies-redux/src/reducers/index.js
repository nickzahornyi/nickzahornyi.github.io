import { combineReducers } from 'redux';

import movies from './movies';
import genres from './genres';
import favourites from './favourites';

export default combineReducers({ movies, genres, favourites });
