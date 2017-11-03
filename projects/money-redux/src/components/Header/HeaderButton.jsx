import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { FABButton, Icon } from 'react-mdl';

import { formType } from '../../actions';

@connect(undefined, mapDispatchToProps)
export default class HeaderButton extends Component {
  render() {
    const { name, onClick } = this.props;
    return (
      <FABButton ripple primary onClick={onClick}>
        <Icon name={name} />
      </FABButton>
    );
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(formType(ownProps.form))
  };
}
