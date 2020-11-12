import React from 'react';
import Axios from 'axios';
import userPhoto from '../../assets/img/ava-default.jpg';

class Users extends React.Component {
  componentDidMount() {
    Axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        this.props.setUsers(res.data.items);
      });
  }

  render() {
    return (
      <section>
        {
          this.props.users.map(u => <div className="users" key={u.id}>
        <span>
          <div>
            <img className="users__img" src={u.photos.small !== null ? u.photos.small : userPhoto} alt="ava"/>
          </div>
          <div>
            {
              u.followed
                ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
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