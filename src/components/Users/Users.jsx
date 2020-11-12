import React from 'react';
import Axios from 'axios';
import userPhoto from '../../assets/img/ava-default.jpg';

class Users extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                this.onPageChanged(p);
              }}
              className={this.props.currentPage === p ? "users__button-page users__button-page--active" : "users__button-page"}>
              {p}
            </button>
          })}
        </div>
        {
          this.props.users.map(u => <div className="users" key={u.id}>
        <span>
          <div>
            <img className="users__img" src={u.photos.small !== null ? u.photos.small : userPhoto} alt="ava"/>
          </div>
          <div>
            {
              u.followed
                ? <button onClick={() => {
                  this.props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  this.props.follow(u.id)
                }}>Follow</button>
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
}

export default Users;