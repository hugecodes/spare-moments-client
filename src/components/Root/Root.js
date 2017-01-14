import React, { Component } from 'react';
import classNames from 'classnames';

export default class Root extends Component {
  render() {
    return (
      <div className="Root">{this.props.children}</div>
    );
  }
};
