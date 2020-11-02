import React from 'react';
import Post from './Post/Post'

const Posts = () => {
  let posts = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'It\'s my first post'},
    {id: 3, message: 'Hi yo'}
  ];

  let postsElements = posts.map(p => {
    return <Post message={p.message}/>
  });

  return (
    <div className="profile__posts">
      <h1 className="profile__headline">my Posts</h1>
      {postsElements}
    </div>
  )
}

export default Posts;