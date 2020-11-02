import React from 'react';
import Post from './Post/Post'

const Posts = () => {
  return (
    <div className="profile__posts">
      <h1 className="profile__headline">my Posts</h1>
      <Post message="Hi, how are you?"/>
      <Post message="It's my first post"/>
    </div>
  )
}

export default Posts;