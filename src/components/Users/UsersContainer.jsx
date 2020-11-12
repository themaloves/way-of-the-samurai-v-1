import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, setUsersTotalCountAC} from '../../state/usersReducer';

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(followAC(usersId))
    },
    unfollow: (usersId) => {
      dispatch(unfollowAC(usersId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)