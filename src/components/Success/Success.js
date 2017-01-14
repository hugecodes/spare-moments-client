import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';
import store from '../../reducers';
import './Success.css';

class Success extends Component {

  componentWillMount() {
    if (this.props.moments.length === 0) {
      this.props.router.push('/');
    }
  }

  render() {
    console.log(this.props)
    if (this.props.moments.length === 0) {
      return ( <div>Loading</div> );
    } else {
      return (
        <div className="Success">
          <div className="wrapper Success__content">
            <img src={ this.props.profilePic } alt={ this.props.name } className="Success__avatar"/>
            <div className="Success__block">
              <p className="Success__lead">Registration Complete</p>
              <p className="Success__copy">Success!<br/> Are you ready to volunteer?</p>
            </div>
            <Link to="/ready" className="button--bottom">Let's do it</Link>
          </div>
        </div>
      );
    }

  }
}

const mapStateToProps = function(store) {
  return {
    name: store.moment.user.userName,
    moments: store.moment.moments,
    profilePic: store.moment.user.profilePic
  };
}

export default connect(mapStateToProps)(Success);
