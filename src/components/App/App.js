import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import axios from 'axios';
import { getMoments } from '../../actions';
import store from '../../reducers';
import { Link } from 'react-router'
import './App.css';

class App extends Component {

  componentWillMount() {
    axios.get('http://localhost:8080/api/moments')
      .then((res) => {
        this.props.getMoments(res.data);
      });
  }

  render() {
    return (
      <div className={classNames('App')}>
        <div className="wrapper">
          <h1 className="App__logo">
            <span className="App__logo-first">Spare</span>
            <span className="App__logo-second">M_ments</span>
          </h1>
          <div className="App__lead">
            <p className="App__leadcopy">Donating an hour of your time can have a huge impact on someone else.</p>
          </div>
          <ul className="App__slider">
            <li className="App__slider-card">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg"
              className="App__slider-image"
              alt=""/>
              <div className="App__slider-copy">
                <p>Thursday</p>
                <p>Mark C cooked for Mary L.</p>
              </div>
            </li>
            <li className="App__slider-card">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
              className="App__slider-image"
              alt=""/>
              <div className="App__slider-copy">
                <p>Thursday</p>
                <p>Mark did this cool thing</p>
              </div>
            </li>
            <li className="App__slider-card">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/glif/128.jpg"
              className="App__slider-image"
              alt=""/>
              <div className="App__slider-copy">
                <p>Thursday</p>
                <p>Mark did this cool thing</p>
              </div>
            </li>
          </ul>
          <Link to="/register" className={classNames('button--bottom')}>How can you help?</Link>
        </div>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getMoments: (val) => dispatch(getMoments(val))
});

const mapStateToProps = function(store) {
  return {
    moments: store.moment.moments
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
