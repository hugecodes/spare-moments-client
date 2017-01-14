import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import axios from 'axios';
import { getMoments } from '../../actions';
import store from '../../reducers';
import { Link } from 'react-router';
import './App.css';

import Logo from '../../assets/logo.svg';
import Soup from '../../assets/soup.png';
import Car from '../../assets/car.png';

class App extends Component {

  componentWillMount() {
    axios.get('http://ec2-54-226-161-164.compute-1.amazonaws.com:8080/api/moments')
      .then((res) => {
        this.props.getMoments(res.data);
      });
  }

  render() {
    return (
      <div className={classNames('App')}>
        <div className="wrapper">
          <div className="App__lead">
            <p className="App__leadcopy">Donating an hour of your time can have a huge impact on someone else.</p>
          </div>
          <h1 className="App__logo">
            <img src={Logo} alt=""/>
          </h1>

          <ul className="App__slider">
            <li className="App__slider-card">
              <img src={Soup}
              className="App__slider-image"
              alt=""/>
              <div className="App__slider-copy">
                <p>Thursday</p>
                <p>Mark C cooked for Mary L.</p>
              </div>
            </li>
            <li className="App__slider-card">
              <img src={Car}
              className="App__slider-image"
              alt=""/>
              <div className="App__slider-copy">
                <p>Thursday</p>
                <p>Mark did this cool thing</p>
              </div>
            </li>
            <li className="App__slider-card">
              <img src={Soup}
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
