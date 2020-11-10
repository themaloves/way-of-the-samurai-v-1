import React from 'react';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../state/profileReducer';
import Posts from './Posts';

const PostsContainer = (props) => {
  let state = props.store.getState();

  const addPost = () => {
      props.store.dispatch(addPostActionCreator())
    },
    onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
    }

  return (
    <Posts updateNewPostText={onPostChange}
           addPost={addPost}
           posts={state.profile.posts}
           newPostText={state.profile.newPostText}/>
  )
}

export default PostsContainer;