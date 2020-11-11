import React from 'react';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers(
      [
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
    )
  }

  return (
    <section>
      {
        props.users.map(u => <div className="users" key={u.id}>
        <span>
          <div>
            <img className="users__img" src={u.photoUrl} alt="ava"/>
          </div>
          <div>
            {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
              <button onClick={() => {props.follow(u.id)}}>Follow</button>}

          </div>
        </span>
          <span>
            <div>
              {u.fullName}
            </div>
            <div>
              {u.status}
            </div>
          </span>
          <span>
            <div>
              {u.location.country}
            </div>
            <div>
              {u.location.city}
            </div>
          </span>
        </div>)
      }
    </section>
  )
}

export default Users;