import React from 'react';
import Posts from './Posts/Posts';
import Info from './Info/Info';

const Profile = () => {
  return (
    <section className="profile">
      <Info/>
      <Posts/>
    </section>
  )
}

export default Profile;