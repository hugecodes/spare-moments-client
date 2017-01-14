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
      <div className="App">
        <h1>Spare Moments</h1>
        <p>Have a moment to spare? Donating just an hour of your time a week can make a huge impact on someone’s life.</p>
        <ul>
          <li>
            <img src="http://www.radfaces.com/images/avatars/mechagodzilla.jpg" alt=""/>
            <p>Mark did this cool thing</p>
          </li>
          <li>
            <img src="http://www.radfaces.com/images/avatars/mechagodzilla.jpg" alt=""/>
            <p>Mark did this cool thing</p>
          </li>
          <li>
            <img src="http://www.radfaces.com/images/avatars/mechagodzilla.jpg" alt=""/>
            <p>Mark did this cool thing</p>
          </li>
        </ul>
        <Link to="/register">How can you help?</Link>
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
