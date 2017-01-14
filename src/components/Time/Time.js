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
        <div className="wrapper Time__content">
          <p>I can help with</p>
          <p className="Time__lead">{this.props.activeSkill} for</p>
          <ul className="Time__wrapper">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
          <p>Hours</p>
          <Link to="/moment" className="button--bottom">Let's go</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTimeToSpare: (val) => dispatch(updateTimeToSpare(val))
});

const mapStateToProps = function(store) {
  return {
    activeSkill: store.moment.user.activeSkill,
    userName: store.moment.user.userName,
    moments: store.moment.moments
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Time);
