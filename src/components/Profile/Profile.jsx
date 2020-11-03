import React from 'react';
import Posts from './Posts/Posts';
import Info from './Info/Info';

const Profile = (props) => {
  return (
    <section className="profile">
      <Info/>
      <Posts posts={props.posts}/>
    </section>
  )
}

export default Profile;