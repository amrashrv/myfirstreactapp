import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../storeContext';
import MyPosts from './Myposts';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().profilePage.newPostText;
          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }
          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }
          return (
            <MyPosts
              updateNewPostText={onPostChange}
              addPost={addPost}
              posts={store.getState().profilePage.posts}
              newPostText={state} />
          )
        }

      }
    </StoreContext.Consumer>);
}
export default MyPostsContainer;