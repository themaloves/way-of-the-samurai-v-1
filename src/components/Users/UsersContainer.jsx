import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage,
  setUsers,
  unfollow,
  setUsersTotalCount,
  toggleIsFetching
} from '../../state/usersReducer';
import Axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items);
        this.props.setUsersTotalCount(res.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items);
      });
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
               unfollow={this.props.unfollow}
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
    isFetching: state.users.isFetching
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
})(UsersComponent)