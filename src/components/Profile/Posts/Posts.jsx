import React from 'react';
import Post from './Post/Post'

const Posts = (props) => {
  let postsElements = props.data.map(p => {
    return <Post message={p.message}/>
  });

  const
    newPostElement = React.createRef(),
    addPost = () => {
      props.addPost()
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
        <button onClick={addPost}>Новый пост</button>
      </div>
      <h1 className="profile__headline">Мои посты</h1>
      {postsElements}
    </div>
  )
}

export default Posts;