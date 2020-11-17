import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage,
  unFollow,
  toggleFollowingProgress,
  getUsers
} from '../../state/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (p) => {
    this.props.getUsers(p, this.props.pageSize);
  }

  render() {
    return (
      <>
        {
          this.props.isFetching
            ? <Preloader/>
            : null
        }
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unFollow}
               followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
  }
}

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers
})(UsersComponent)