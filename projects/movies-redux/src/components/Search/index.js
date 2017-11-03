import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovies } from '../../actions';

import { Textfield } from 'react-mdl';

import './style.sass';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

@connect(mapStateToProps, mapDispatchToProps)
export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchQuery: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleFavourites = this.handleToggleFavourites.bind(this);
  }
  render() {
    return (
      <div className="search">
        <form className="search-container" onSubmit={this.handleSearch}>
          <Textfield
            onChange={this.handleChange}
            label="Search..."
            floatingLabel
            value={this.state.searchQuery}
            style={{ width: '300px' }}
          />
          <button className="search__button">
            <i className="material-icons">search</i>
          </button>
        </form>
        <button
          className="search__favourites"
          onClick={this.handleToggleFavourites}
        >
          Favourites
          <i className="material-icons">stars</i>
          {<span>{this.props.favourites.length}</span>}
        </button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      searchQuery: e.target.value
    });
  }

  handleSearch(e) {
    e.preventDefault();

    if (this.state.searchQuery !== '') {
      this.props.onFetchMovies(this.state.searchQuery);
    }
    this.props.onHide();
  }

  handleToggleFavourites() {
    this.props.onToggle();
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.items,
    isFetching: state.movies.isFetching,
    favourites: state.favourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchMovies: movies => dispatch(fetchMovies(movies))
  };
}

Search.propTypes = {
  favourites: PropTypes.array,
  onFetchMovies: PropTypes.func,
  onHide: PropTypes.func,
  onToggle: PropTypes.func
};
