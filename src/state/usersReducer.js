import {act} from "@testing-library/react";

const UNFOLLOW = 'UNFOLLOW',
  FOLLOW = 'FOLLOW',
  SET_USERS = 'SET_USERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
  TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    }
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_USERS_TOTAL_COUNT: {
      return {...state, totalUsersCount: action.totalCount}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default: {
      return state;
    }
  }
}

export const follow = (userId) => ({type: FOLLOW, userId}),
  unfollow = (userId) => ({type: UNFOLLOW, userId}),
  setUsers = (users) => ({type: SET_USERS, users}),
  setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage}),
  setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount}),
  toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching}),
  toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export default usersReducer;