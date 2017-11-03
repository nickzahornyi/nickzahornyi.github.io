import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Input.less';

export default class Input extends Component {
  state = {
    text: ''
  };

  componentWillReceiveProps = nextProps => {
    nextProps.clear
      ? this.setState({
          text: ''
        })
      : false;
  };

  handleTextChange = e => {
    this.setState(
      {
        text: e.target.value
      },
      () => this.props.onEnter(this.state.text)
    );
  };

  render() {
    return (
      <div className={styles.root}>
        <input
          className={styles.input}
          type="text"
          placeholder="What needs to be done?........"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}

Input.propTypes = {
  clear: PropTypes.bool,
  onComplete: PropTypes.func,
  onEnter: PropTypes.func
};
