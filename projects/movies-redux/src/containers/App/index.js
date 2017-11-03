import React, { Component } from 'react';

import MoviesList from '../MoviesList';
import FavouritesList from '../FavouritesList';
import Search from '../../components/Search';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showFavourites: false
    };

    this.handleToggleFavourites = this.handleToggleFavourites.bind(this);
    this.handleHideFavourites = this.handleHideFavourites.bind(this);
  }

  render() {
    return (
      <div>
        <Search
          onToggle={this.handleToggleFavourites}
          onHide={this.handleHideFavourites}
        />
        {this.state.showFavourites ? <FavouritesList /> : <MoviesList />}
      </div>
    );
  }

  handleToggleFavourites() {
    this.setState({
      showFavourites: !this.state.showFavourites
    });
  }

  handleHideFavourites() {
    this.setState({
      showFavourites: false
    });
  }
}
