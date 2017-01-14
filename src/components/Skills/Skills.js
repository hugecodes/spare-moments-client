import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import axios from 'axios';
import logo from '../../assets/logo.svg';
import store from '../../reducers';
import { updateSkills, updateUserId } from '../../actions';
import './Skills.css';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.handleSkillUpdate = this.handleSkillUpdate.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

    this.skills = [];
  }

  componentWillMount() {
    if (this.props.moments.length === 0) {
      this.props.router.push('/');
    }
  }

  handleSkillUpdate(e) {
    this.skills.push(e.target.value);
    this.props.updateSkills(this.skills);
  }

  handleRegister() {
    axios.post('http://localhost:8080/api/users', {
      name: this.props.userName,
      profilePic: this.props.profilePic,
      skills: this.props.skills
    })
      .then((res) => {
        this.props.updateUserId(res.data.id);
        this.props.router.push('/ready');
      })

  }

  render() {
    return (
      <div className="Skills">
        <h1>{this.props.userName}, what are some of things</h1>
        <p className="large">You can help with</p>
        <div className="buttonList">
          <div className="inputBlock">
            <label htmlFor="cooking">cooking</label>
            <input type="checkbox" value="cooking" id="cooking" onChange={ this.handleSkillUpdate }/>
          </div>
          <div className="inputBlock">
            <label htmlFor="driving">driving</label>
            <input type="checkbox" value="driving" id="driving" onChange={ this.handleSkillUpdate }/>
          </div>
          <div className="inputBlock">
            <label htmlFor="yardwork">yardwork</label>
            <input type="checkbox" value="yardwork" id="yardwork" onChange={ this.handleSkillUpdate }/>
          </div>
          <div className="inputBlock">
            <label htmlFor="computer">computer</label>
            <input type="checkbox" value="computer" id="computer" onChange={ this.handleSkillUpdate }/>
          </div>
          <div className="inputBlock">
            <label htmlFor="financial">financial</label>
            <input type="checkbox" value="financial" id="financial" onChange={ this.handleSkillUpdate }/>
          </div>
          <div className="inputBlock">
            <label htmlFor="tutoring">tutoring</label>
            <input type="checkbox" value="tutoring" id="tutoring" onChange={ this.handleSkillUpdate }/>
          </div>
          <div className="inputBlock">
            <label htmlFor="errands">errands</label>
            <input type="checkbox" value="errands" id="errands" onChange={ this.handleSkillUpdate }/>
          </div>
          <div className="inputBlock">
            <label htmlFor="handywork">handywork</label>
            <input type="checkbox" value="handywork" id="handywork" onChange={ this.handleSkillUpdate }/>
          </div>
        </div>
        <button onClick={ this.handleRegister } >Register</button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateSkills: (val) => dispatch(updateSkills(val)),
  updateUserId: (val) => dispatch(updateUserId(val))
});

const mapStateToProps = function(store) {
  return {
    userName: store.moment.user.userName,
    profilePic: store.moment.user.profilePic,
    skills: store.moment.user.skills,
    userId: store.moment.user.userId,
    moments: store.moment.moments
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
