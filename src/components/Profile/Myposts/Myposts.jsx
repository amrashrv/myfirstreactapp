import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();


  let addPost = () => {
    props.dispatch({ type: "Add-post"});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "Update-new-post-text", newText: text});
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