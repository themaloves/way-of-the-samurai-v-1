import React from 'react';
import Post from './Post/Post'

const Posts = () => {
  return (
    <div>
      my Posts
      <Post message="Hi, how are you?"/>
      <Post message="It's my first post"/>
    </div>
  )
}

export default Posts;