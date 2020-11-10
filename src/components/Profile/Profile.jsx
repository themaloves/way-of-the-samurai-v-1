import React from 'react';
import Info from './Info/Info';
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <section className="profile">
      <Info/>
      <PostsContainer store={props.store}/>
    </section>
  )
}

export default Profile;