import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer'

const MyPosts = (props) => {

  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();


  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.dispatch(updateNewPostTextActionCreator(text));
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  return (
    <div className={classes.post}>
      <div className={classes.newpost}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.myposts}>
        {postsElements}
      </div>
    </div>

  );
}
export default MyPosts;