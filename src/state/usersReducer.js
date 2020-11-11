const UNFOLLOW = 'UNFOLLOW',
  FOLLOW = 'FOLLOW',
  SET_USERS = 'SET_USERS';

let initialState = {
  users: []
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
      return {...state, users: [...state.users, ...action.users]}
    }
    default: {
      return state;
    }
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId}),
  unfollowAC = (userId) => ({type: UNFOLLOW, userId}),
  setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;