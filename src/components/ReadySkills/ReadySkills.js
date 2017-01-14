import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import logo from '../../assets/logo.svg';
import store from '../../reducers';
import { updateActiveSkill } from '../../actions';
import './ReadySkills.css';

class ReadySkills extends Component {

  constructor(props) {
    super(props);
    this.renderSkills = this.renderSkills.bind(this);
    this.handleActiveSkillUpdate = this.handleActiveSkillUpdate.bind(this);
  }

  // componentWillMount() {
  //   if (this.props.moments.length === 0) {
  //     this.props.router.push('/');
  //   }
  // }

  handleActiveSkillUpdate(e) {
    this.props.updateActiveSkill(e.target.value);
  }

  renderSkills() {
    return this.props.skills.map((skill) => {
      return (
        <div className="ReadySkills__inputBlock" key={skill}>
          <label htmlFor={skill}>
            <div className="ReadySkills__inputimage">
            </div>
            {skill}
          </label>
          <input type="radio" value={skill} id={skill} name="activeSkill" onChange={ this.handleActiveSkillUpdate }/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ReadySkills">
        <div className="wrapper ReadySkills__content">
          <p>I can help with</p>
          <div className="ReadySkills__buttonList">
            { this.renderSkills() }
          </div>
          <Link to="/ready/time" className="button--bottom">For how long?</Link>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateActiveSkill: (val) => dispatch(updateActiveSkill(val))
});

const mapStateToProps = function(store) {
  return {
    userName: store.moment.user.userName,
    skills: store.moment.user.skills,
    activeSkill: store.moment.user.activeSkill,
    moments: store.moment.moments
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadySkills);
