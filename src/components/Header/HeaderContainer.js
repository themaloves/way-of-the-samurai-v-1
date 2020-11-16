import React from 'react';
import Header from './Header';
import Axios from 'axios';
import {setAuthUserData} from "../../state/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(res => {
        if (res.data.resultCode === 0) {
          let {id, login, email } = res.data.data;
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {
  setAuthUserData
})(HeaderContainer);