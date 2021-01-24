import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.post}>
      <div className={classes.newpost}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.myposts}>
        <Post message='Hi' user="George: " likesAmount="5" />
        <Post message='first post' user="Adam: " likesAmount="8" />
      </div>
    </div>

  );
}
export default MyPosts;