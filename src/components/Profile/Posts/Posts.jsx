import React from 'react';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';

const NewAddPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newPostText'} component={'textarea'}/>
      </div>
      <div>
        <button>Новый пост</button>
      </div>
    </form>
  )
}

const AddNewPostForm = reduxForm({
  form: 'ProfileAddNewPostForm'
})(NewAddPost)

const Posts = (props) => {
  let postsElements = props.posts.map(p => {
    return <Post key={p.id} message={p.message}/>
  });

  const onAddPost = (values) => {
      props.addPost(values.newPostText);
    };

  return (
    <div className="profile__posts">
      <AddNewPostForm onSubmit={onAddPost}/>
      <h1 className="profile__headline">Мои посты</h1>
      {postsElements}
    </div>
  )
}

export default Posts;