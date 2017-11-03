import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cell, Card, CardTitle, CardText } from 'react-mdl';
import 'react-mdl/extra/material.css';
import './style.sass';

export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.handleAddToFavourites = this.handleAddToFavourites.bind(this);
    this.handleRemoveFromFavourites = this.handleRemoveFromFavourites.bind(
      this
    );
  }
  render() {
    const { title, posterPath, genres, favourite } = this.props;

    return (
      <Cell col={3}>
        <Card shadow={0} className={favourite ? 'movie active' : 'movie'}>
          <img
            className="movie__poster"
            src={
              posterPath
                ? `https://image.tmdb.org/t/p/w185${posterPath}`
                : 'images/poster-placeholder.jpg'
            }
            alt={title}
          />
          <CardTitle>{title}</CardTitle>
          <CardText>{genres}</CardText>
          {this.props.favourite ? (
            <p
              className="movie__favourite active"
              onClick={this.handleRemoveFromFavourites}
            >
              In favourites <i className="material-icons">star</i>
            </p>
          ) : (
            <p
              className="movie__favourite"
              onClick={this.handleAddToFavourites}
            >
              Add to favourites <i className="material-icons">star_border</i>
            </p>
          )}
        </Card>
      </Cell>
    );
  }

  handleAddToFavourites() {
    this.props.onAdd(this.props.id);
  }

  handleRemoveFromFavourites() {
    this.props.onRemove(this.props.id);
  }
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  posterPath: PropTypes.string,
  genres: PropTypes.string,
  favourite: PropTypes.number,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func
};
