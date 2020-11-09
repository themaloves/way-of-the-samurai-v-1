import React from 'react';

const BestFriends = (props) => {
  console.log(props);
  let friendItem = props.data.friends.map((f) => {
    return (
      <li key={f.id} className="nav__friend">
        <div className="nav__img">
          <img src={f.pathImg} alt="avatar"/>
        </div>
        <div className="nav__full-name">
          <span>{`${f.firstname} ${f.lastName}`}</span>
        </div>
      </li>
    )
  });

  return (
    <ul className="nav__friends">
      <h4>Частые друзья</h4>
      {friendItem}
    </ul>
  )
}

export default BestFriends;
