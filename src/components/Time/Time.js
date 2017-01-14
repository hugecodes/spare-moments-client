import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import store from '../../reducers';
import { updateTimeToSpare } from '../../actions';
import './Time.css';

class Time extends Component {

  constructor(props) {
    super(props);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  componentWillMount() {
    if (this.props.moments.length === 0) {
      this.props.router.push('/');
    }
  }

  handleTimeChange(e) {
    this.props.updateTimeToSpare(e.target.value);
  }

  render() {
    return (
      <div className="Time">
        <h1>{ this.props.userName }, how can you help?</h1>
        <p>I can help spare</p>
        <select onChange={ this.handleTimeChange }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
        <p>Hours now</p>
        <Link to="/ready/select">How can you help?</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTimeToSpare: (val) => dispatch(updateTimeToSpare(val))
});

const mapStateToProps = function(store) {
  return {
    userName: store.moment.user.userName,
    moments: store.moment.moments
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Time);
