import React from 'react';
import Info from './Info/Info';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
  return (
    <section className="profile">
      <Info profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
      />
      <PostsContainer/>
    </section>
  )
}

export default Profile;