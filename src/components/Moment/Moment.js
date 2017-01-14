import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { updateActiveJob } from '../../actions';
import './Moment.css';

const activeSkill = 'errands';

class Moment extends Component {

  constructor(props) {
    super(props);
    this.handleNavigate = this.handleNavigate.bind(this);

    this.state = {
      moment: null
    }
  }

  componentWillMount() {
    if (this.props.moments.length === 0) {
      this.props.router.push('/');
    } else {
      let data = this.props.moments.filter((val) => {
        return val.skill === activeSkill;
      });

      this.setState({
        moment: data[Math.floor(Math.random() * data.length)]
      });
    }
  }

  handleNavigate() {
    this.props.updateActiveJob(this.state.moment);
    this.props.router.push('/moment/location');
  }


  render() {
    return (
      <div>
      { this.state.moment !== null
        ?
        <div>
          <p>{ this.state.moment.name } needs help with</p>
          <p>{ this.state.moment.title }</p>
          <p>{ this.state.moment.description }</p>
          <p>Location</p>
          <p>5 min</p>
          <button onClick={ this.handleNavigate } >Help { this.state.moment.name }</button>
        </div>
        :
        null
      }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateActiveJob: (val) => dispatch(updateActiveJob(val))
});

const mapStateToProps = function(store) {
  return {
    userName: store.moment.user.userName,
    moments: store.moment.moments,
    activeSkill: store.moment.user.activeSkill,
    activeJob: store.moment.user.activeJob
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Moment);
