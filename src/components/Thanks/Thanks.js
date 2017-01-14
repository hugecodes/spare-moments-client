import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import './Thanks.css';

class Thanks extends Component {

  componentWillMount() {
    if (this.props.moments.length === 0) {
      this.props.router.push('/');
    }
  }

  render() {
    return (
      <div className="Thanks">
        <p>All done</p>
        <h1>Thank you</h1>
        <div className="scrollArea">
          <div className="scrollComment">
            <img src="#" alt=""/>
            Learned new stuff
          </div>
          <div className="scrollComment">
            <img src="#" alt=""/>
            Learned new stuff
          </div>
          <div className="scrollComment">
            <img src="#" alt=""/>
            Learned new stuff
          </div>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="comments">

        </textarea>
        <Link to="/moment/done">How can you help?</Link>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    moments: store.moment.moments
  };
}

export default connect(mapStateToProps)(Thanks);
