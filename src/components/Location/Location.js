import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';
import store from '../../reducers';
import './Location.css';

import MapImage from '../../assets/map.png';

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
          <div className="wrapper Location__content">
            <p>{ this.props.activeJob.title } for</p>
            <p className="Location__large">{ this.props.activeJob.name }</p>
            <div className="Location__map">
              <img src={this.props.activeJob.image}  alt="" className="Location__mapavatar"/>
              <img src={MapImage} alt=""/>
            </div>
            <Link to="/moment/thanks" className="button--bottom">Get Started</Link>
          </div>
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
