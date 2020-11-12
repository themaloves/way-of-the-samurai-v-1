const UNFOLLOW = 'UNFOLLOW',
  FOLLOW = 'FOLLOW',
  SET_USERS = 'SET_USERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
    default: {
      return state;
    }
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId}),
  unfollowAC = (userId) => ({type: UNFOLLOW, userId}),
  setUsersAC = (users) => ({type: SET_USERS, users}),
  setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage}),
  setUsersTotalCountAC = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});

export default usersReducer;