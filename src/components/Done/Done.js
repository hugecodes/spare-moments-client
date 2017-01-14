import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import './Done.css';

class Done extends Component {

  // componentWillMount() {
  //   if (this.props.moments.length === 0) {
  //     this.props.router.push('/');
  //   }
  // }

  render() {
    return (
      <div className="Done">
        <div className="wrapper Done__content">
          <div className="Done__wrapper">
            <p>Type your note</p>
            <textarea name="" id="" placeholder="Say something nice!"></textarea>
          </div>
          <Link to="/" className="button--bottom">Send Note</Link>
        </div>
      </div>
    );
  }
}


export default Done;
