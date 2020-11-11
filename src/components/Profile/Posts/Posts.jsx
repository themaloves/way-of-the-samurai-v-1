import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
  let postsElements = props.posts.map(p => {
    return <Post key={p.id} message={p.message}/>
  });

  const newPostElement = React.createRef(),
    onAddPost = () => {
      props.addPost();
    },
    onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }

  return (
    <div className="profile__posts">
      <div>
        <textarea onChange={onPostChange}
                  ref={newPostElement}
                  value={props.newPostText}/>
      </div>
      <div>
        <button onClick={onAddPost}>Новый пост</button>
      </div>
      <h1 className="profile__headline">Мои посты</h1>
      {postsElements}
    </div>
  )
}

export default Posts;