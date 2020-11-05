import React from 'react';
import Posts from './Posts/Posts';
import Info from './Info/Info';

const Profile = (props) => {
  return (
    <section className="profile">
      <Info/>
      <Posts data={props.profile.posts}
             addPost={props.addPost}
             newPostText={props.profile.newPostText}
             updateNewPostText={props.updateNewPostText}
      />
    </section>
  )
}

export default Profile;