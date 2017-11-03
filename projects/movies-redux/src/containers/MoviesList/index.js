import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Spinner } from 'react-mdl';

import {
  fetchMovies,
  fetchGenres,
  addToFavourites,
  removeFromFavourites
} from '../../actions';
import Movie from '../../components/Movie';

@connect(mapStateToProps, mapDispatchToProps)
export default class MoviesList extends Component {
  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
    this.handleAddToFavourites = this.handleAddToFavourites.bind(this);
    this.handleRemoveFromFavourites = this.handleRemoveFromFavourites.bind(
      this
    );
    this.getGenreName = this.getGenreName.bind(this);
    this.isFavourite = this.isFavourite.bind(this);
  }

  componentDidMount() {
    this.props.onFetchGenres();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (
      window.scrollY + window.innerHeight >=
      document.querySelector('body').clientHeight
    ) {
      if (this.props.page < this.props.totalPages) {
        this.props.onFetchMovies(this.props.search, this.props.page + 1);
      }
    }
  }

  getGenreName(genres) {
    let genresArr = [];
    genres.forEach(genre => {
      this.props.genres.map(item => {
        if (genre === item.id) {
          genresArr.push(item.name);
        }
      });
      return genresArr;
    });
    return genresArr.join(', ');
  }

  handleAddToFavourites(id) {
    this.props.onAddToFavourites(
      this.props.movies.filter(movie => id === movie.id)
    );
  }

  handleRemoveFromFavourites(id) {
    this.props.onRemoveFromFavourites(
      this.props.movies.filter(movie => id === movie.id)
    );
  }

  isFavourite(id) {
    return this.props.favourites.filter(movie => id === movie.id).length;
  }

  render() {
    const { movies, isFetching } = this.props;
    return (
      <Grid className="container">
        {movies.map((movie, index) => (
          <Movie
            id={movie.id}
            key={index}
            title={movie.title}
            favourite={this.isFavourite(movie.id)}
            genres={this.getGenreName(movie.genre_ids)}
            posterPath={movie.poster_path}
            onAdd={this.handleAddToFavourites}
            onRemove={this.handleRemoveFromFavourites}
          />
        ))}
        {isFetching && (
          <div className="spinner">
            <Spinner />
          </div>
        )}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.items,
    isFetching: state.movies.isFetching,
    search: state.movies.search,
    page: state.movies.page,
    totalPages: state.movies.totalPages,
    genres: state.genres,
    favourites: state.favourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchMovies: (movies, page) => dispatch(fetchMovies(movies, page)),
    onFetchGenres: () => dispatch(fetchGenres()),
    onAddToFavourites: movie => dispatch(addToFavourites(movie)),
    onRemoveFromFavourites: movie => dispatch(removeFromFavourites(movie))
  };
}

MoviesList.propTypes = {
  onFetchGenres: PropTypes.func,
  onFetchMovies: PropTypes.func,
  onAddToFavourites: PropTypes.func,
  onRemoveFromFavourites: PropTypes.func,
  isFetching: PropTypes.bool,
  favourites: PropTypes.array,
  movies: PropTypes.array,
  genres: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  search: PropTypes.string
};
