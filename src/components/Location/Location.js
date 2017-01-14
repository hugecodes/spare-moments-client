import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';
import store from '../../reducers';
import './Location.css';

class Location extends Component {

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
        <div className="Location">
          <h1>{ this.props.activeJob.name } / 5 Min away</h1>
          <img src={this.props.activeJob.image} alt=""/>
          <Link to="/moment/thanks">Get Started?</Link>
        </div>
      );
    }
  }
}

const mapStateToProps = function(store) {
  return {
    activeJob: store.moment.user.activeJob,
    moments: store.moment.moments
  };
}

export default connect(mapStateToProps)(Location);
