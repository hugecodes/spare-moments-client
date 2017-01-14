import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import './Thanks.css';

import Note from '../../assets/notes.png';

class Thanks extends Component {

  componentWillMount() {
    if (this.props.moments.length === 0) {
      this.props.router.push('/');
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="Thanks">
        <div className="wrapper Thanks__content">
          <div className="Thanks__copy">
            <p className="Thanks__large">Send a thank you</p>
            <p>What stood out with { this.props.activeJob.name }?</p>
          </div>
          <div className="Thanks__scrollArea">
            <div className="Thanks__scrollComment">
              <img src="#" alt=""/>
              Punctuality
            </div>
            <div className="Thanks__scrollComment">
              <img src="#" alt=""/>
              Friendly
            </div>
            <div className="Thanks__scrollComment">
              <img src="#" alt=""/>
              Learned new stuff
            </div>
          </div>

          <Link to="/moment/done" className="Thanks__note">
            <img src={Note} alt=""/>
            Add a note
          </Link>
          <Link to="/moment/done" className="button--bottom">Thank { this.props.activeJob.name }</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    moments: store.moment.moments,
    activeJob: store.moment.user.activeJob
  };
}

export default connect(mapStateToProps)(Thanks);
