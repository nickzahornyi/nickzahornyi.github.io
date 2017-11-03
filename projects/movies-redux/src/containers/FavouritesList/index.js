import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'react-mdl';

import Movie from '../../components/Movie';

import './styles.sass';

@connect(mapStateToProps, mapDispatchToProps)
export default class FavouritesList extends Component {
  constructor() {
    super();

    this.getGenreName = this.getGenreName.bind(this);
  }

  getGenreName(genres) {
    let genresArr = [];
    genres.map(genre => {
      this.props.genres.map(item => {
        if (genre === item.id) {
          genresArr.push(item.name);
        }
      });
    });
    return genresArr.join(', ');
  }

  render() {
    const { favourites } = this.props;
    return (
      <Grid className="container favourites">
        {favourites.map((movie, index) => (
          <Movie
            id={movie.id}
            key={index}
            title={movie.title}
            favourite={true}
            genres={this.getGenreName(movie.genre_ids)}
            posterPath={movie.poster_path}
            onAdd={this.handleAddToFavourites}
            onRemove={this.handleRemoveFromFavourites}
          />
        ))}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    favourites: state.favourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchGenres: () => dispatch(fetchGenres())
  };
}

FavouritesList.propTypes = {
  favourites: PropTypes.array,
  genres: PropTypes.array
};
