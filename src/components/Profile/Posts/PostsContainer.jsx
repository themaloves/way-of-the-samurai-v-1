import React from 'react';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../state/profileReducer';
import Posts from './Posts';
import StoreContext from "../../../StoreContext";

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          const addPost = () => {
              store.dispatch(addPostActionCreator())
            },
            onPostChange = (text) => {
              let action = updateNewPostTextActionCreator(text);
              store.dispatch(action);
            }

          return <Posts updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={store.getState().profile.posts}
                        newPostText={store.getState().profile.newPostText}/>
        }
      }

    </StoreContext.Consumer>
  )
}

export default PostsContainer;