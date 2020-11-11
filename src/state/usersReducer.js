const UNFOLLOW = 'UNFOLLOW',
  FOLLOW = 'FOLLOW',
  SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://i.pinimg.com/originals/3d/32/cf/3d32cfca57376f51a0ef7f14c9f6c230.jpg',
      fullName: 'Logan',
      status: 'i Am a boss',
      location: {city: 'Moscow', country: 'Russia'},
      followed: false
    },
    {
      id: 2,
      photoUrl: 'https://i.pinimg.com/originals/3d/32/cf/3d32cfca57376f51a0ef7f14c9f6c230.jpg',
      fullName: 'Anna',
      status: 'i Am a boss too',
      location: {city: 'Kazan', country: 'Russia'},
      followed: true
    },
    {
      id: 3,
      photoUrl: 'https://i.pinimg.com/originals/3d/32/cf/3d32cfca57376f51a0ef7f14c9f6c230.jpg',
      fullName: 'Lena',
      status: 'i Am a boss three',
      location: {city: 'Minsk', country: 'Belarus'},
      followed: false
    }
  ]
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