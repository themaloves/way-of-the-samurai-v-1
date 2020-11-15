import React from 'react';
import Profile from './Profile';
import Axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../state/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(res => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profile.profile
  }
}

export default connect(mapStateToProps,{
  setUserProfile
})(ProfileContainer);