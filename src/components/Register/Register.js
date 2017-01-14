import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import store from '../../reducers';
import logo from '../../assets/camera-icon.png';
import { updateName, updateProfilePic } from '../../actions';
import './Register.css';

class Register extends Component {

  constructor(props) {
    super(props);
    this.handleNameInputChange = this.handleNameInputChange.bind(this);
    this.handleImageDrop = this.handleImageDrop.bind(this);
  }

  componentWillMount() {
    if (this.props.moments.length === 0) {
      this.props.router.push('/');
    }
  }

  handleNameInputChange(ev) {
    this.props.updateName(ev.target.value);
  }

  handleImageDrop(files) {
    axios.get('https://randomuser.me/api/')
      .then((res) => {
        this.props.updateProfilePic(res.data.results[0].picture.large);
      });
  }

  render() {
    const image = this.props.profilePic ? this.props.profilePic : logo;
    return (
      <div className="Register">
        <div className="wrapper">
          <div className="Register__content">
            <div className="Register__copy">
              <p>Your name is</p>
              <input
                type="text"
                placeholder="Your name"
                value={ this.props.value }
                onChange={ this.handleNameInputChange }
                className="input__text Register__input"
              />
            </div>
            <Dropzone
              onDrop={ this.handleImageDrop }
              className="Register__imagedrop"
              >
              <img src={ image } />

            </Dropzone>
            <Link to="/register/skills" className="button--bottom">How can you help?</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateName: (val) => dispatch(updateName(val)),
  updateProfilePic: (val) => dispatch(updateProfilePic(val))
});

const mapStateToProps = function(store) {
  return {
    userName: store.moment.user.userName,
    profilePic: store.moment.user.profilePic,
    moments: store.moment.moments
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
