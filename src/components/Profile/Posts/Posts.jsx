import React from 'react';
import Post from './Post/Post'

const Posts = (props) => {
  let postsElements = props.data.map(p => {
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