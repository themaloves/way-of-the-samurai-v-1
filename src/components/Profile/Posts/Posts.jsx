import React from 'react';
import Post from './Post/Post'

const Posts = (props) => {
  let postsElements = props.data.map(p => {
    return <Post message={p.message}/>
  });

  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className="profile__posts">
      <div>
        <textarea ref={newPostElement} name="new-post" cols="30" rows="10" />
      </div>
      <div>
        <button onClick={addPost}>Новый пост</button>
      </div>
      <h1 className="profile__headline">Мои посты</h1>
      {postsElements}
    </div>
  )
}

export default Posts;