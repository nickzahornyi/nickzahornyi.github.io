import axios from 'axios';

const API_PREFIX = 'https://api.themoviedb.org/3/search/movie?api_key=';
const API_GANRE_PREFIX =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=';
const API_TOKEN = '08ca1d300293084d7d4dab3d4cdb374d';

export function getMovies(movie, page = 1) {
  return axios.get(`${API_PREFIX + API_TOKEN}&query=${movie}&page=${page}`);
}

export function getGenres() {
  return axios
    .get(`${API_GANRE_PREFIX + API_TOKEN}`)
    .then(response => response.data);
}

export default {
  getMovies,
  getGenres
};
