import React from 'react';
import userPhoto from '../../assets/img/ava-default.jpg';
import {NavLink} from 'react-router-dom';
import Axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <section>
      <div>
        {pages.map(p => {
          return <button
            onClick={(e) => {
              props.onPageChanged(p);
            }}
            className={props.currentPage === p ? "users__button-page users__button-page--active" : "users__button-page"}>
            {p}
          </button>
        })}
      </div>
      {
        props.users.map(u => <div className="users" key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img className="users__img"
                   src=
                     {
                       u.photos.small !== null
                         ? u.photos.small
                         : userPhoto
                     }
                   alt="ava"/>
            </NavLink>
          </div>
          <div>
            {
              u.followed
                ? <button onClick={() => {
                  Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                    withCredentials: true,
                    headers: {
                      "API-KEY": '9b551536-597f-46ac-a23b-68357a55a70f'
                    }
                  })
                    .then(res => {
                      if(res.data.resultCode === 0) {
                        props.unfollow(u.id)
                      }
                    });
                 }

                }>Unfollow</button>
                : <button onClick={() => {
                  Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": '9b551536-597f-46ac-a23b-68357a55a70f'
                    }
                  })
                    .then(res => {
                      if(res.data.resultCode === 0) {
                        props.follow(u.id)
                      }
                    });
                  }
                }>Follow</button>
            }
          </div>
        </span>
          <span>
            <div>
              {u.name}
            </div>
            <div>
              {u.status}
            </div>
          </span>
          <span>
            <div>
              {"u.location.country"}
            </div>
            <div>
              {"u.location.city"}
            </div>
          </span>
        </div>)
      }
    </section>
  )
}

export default Users;