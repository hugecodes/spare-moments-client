import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';
import store from '../../reducers';
import './Done.css';

class Done extends Component {

  componentWillMount() {
    if (this.props.moments.length === 0) {
      this.props.router.push('/');
    }
  }

  render() {
    if (this.props.moments.length === 0) {
      return ( <div>Loading</div> );
    } else {
      return (
        <div className="Done">
          <img src={ this.props.activeJob.image } alt={ this.props.name }/>
          <h1>Thanks { this.props.name }</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Link to="/">Done</Link>
        </div>
      );
    }

  }
}

const mapStateToProps = function(store) {
  return {
    activeJob: store.moment.user.activeJob,
    name: store.moment.user.userName,
    moments: store.moment.moments
  };
}

export default connect(mapStateToProps)(Done);
