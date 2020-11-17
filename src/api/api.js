import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": '9b551536-597f-46ac-a23b-68357a55a70f'
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => {
      return res.data;
    })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`)
  }
}