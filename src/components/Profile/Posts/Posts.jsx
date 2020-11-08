import React from 'react';
import Post from './Post/Post';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../state/state';

const Posts = (props) => {
  let postsElements = props.data.posts.map(p => {
    return <Post message={p.message}/>
  });

  const
    newPostElement = React.createRef(),
    addPost = () => {
      props.dispatch(addPostActionCreator())
    },
    onPostChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
    }

  return (
    <div className="profile__posts">
      <div>
        <textarea onChange={onPostChange}
                  ref={newPostElement}
                  value={props.data.newPostText}/>
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