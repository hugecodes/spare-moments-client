import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import axios from 'axios';
import logo from '../../assets/logo.svg';
import store from '../../reducers';
import { updateSkills, updateUserId } from '../../actions';
import './Skills.css';

import camera from '../../assets/cameraskill.png';
import computer from '../../assets/computer.png';
import cooking from '../../assets/Cooking.png';
import driving from '../../assets/driving.png';
import errands from '../../assets/errands.png';
import financial from '../../assets/financial.png';
import handywork from '../../assets/handyman.png';
import shopping from '../../assets/shopping.png';
import tutoring from '../../assets/tutoring.png';
import moving from '../../assets/box.png';

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
    axios.post('http://ec2-54-226-161-164.compute-1.amazonaws.com:8080/api/users', {
      name: this.props.userName,
      profilePic: this.props.profilePic,
      skills: this.props.skills
    })
      .then((res) => {
        this.props.updateUserId(res.data.id);
        this.props.router.push('/register/success');
      })
  }

  render() {
    return (
      <div className="Skills">
        <div className="wrapper Skills__content">
          <p className="large Skills__lead">I can help with</p>
          <div className="Skills__buttonList">
            <div className="Skills__inputBlock">
              <label htmlFor="cooking">
                <div className="Skills__inputimage">
                  <img src={cooking} alt=""/>
                </div>
                Cooking
              </label>
              <input type="checkbox" value="cooking" id="cooking" onChange={ this.handleSkillUpdate }/>
            </div>
            <div className="Skills__inputBlock">
              <label htmlFor="driving">
                <div className="Skills__inputimage">
                  <img src={driving} alt=""/>
                </div>
                Driving
              </label>
              <input type="checkbox" value="driving" id="driving" onChange={ this.handleSkillUpdate }/>
            </div>
            <div className="Skills__inputBlock">
              <label htmlFor="errands">
                <div className="Skills__inputimage">
                  <img src={errands} alt=""/>
                </div>
                Errands
              </label>
              <input type="checkbox" value="errands" id="errands" onChange={ this.handleSkillUpdate }/>
            </div>
            <div className="Skills__inputBlock">
              <label htmlFor="financial">
                <div className="Skills__inputimage">
                  <img src={financial} alt=""/>
                </div>
                Financial
              </label>
              <input type="checkbox" value="financial" id="financial" onChange={ this.handleSkillUpdate }/>
            </div>
            <div className="Skills__inputBlock">
              <label htmlFor="tutoring">
                <div className="Skills__inputimage">
                  <img src={tutoring} alt=""/>
                </div>
                Tutoring
              </label>
              <input type="checkbox" value="tutoring" id="tutoring" onChange={ this.handleSkillUpdate }/>
            </div>
            <div className="Skills__inputBlock">
              <label htmlFor="shopping">
                <div className="Skills__inputimage">
                  <img src={shopping} alt=""/>
                </div>
                Shopping
              </label>
              <input type="checkbox" value="shopping" id="shopping" onChange={ this.handleSkillUpdate }/>
            </div>
            <div className="Skills__inputBlock">
              <label htmlFor="moving">
                <div className="Skills__inputimage">
                  <img src={moving} alt=""/>
                </div>
                Moving
              </label>
              <input type="checkbox" value="moving" id="moving" onChange={ this.handleSkillUpdate }/>
            </div>
            <div className="Skills__inputBlock">
              <label htmlFor="handywork">
                <div className="Skills__inputimage">
                  <img src={handywork} alt=""/>
                </div>
                Handyman
              </label>
              <input type="checkbox" value="handywork" id="handywork" onChange={ this.handleSkillUpdate }/>
            </div>
            <div className="Skills__inputBlock">
              <label htmlFor="computer">
                <div className="Skills__inputimage">
                  <img src={computer} alt=""/>
                </div>
                Computer
              </label>
              <input type="checkbox" value="computer" id="computer" onChange={ this.handleSkillUpdate }/>
            </div>
          </div>
          <button onClick={ this.handleRegister } className="button--bottom">Register</button>
        </div>
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
