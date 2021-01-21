import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div className={classes.newpost}>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.myposts}>
        <Post message='Hi' user="George: " likesAmount="5" />
        <Post message='first post' user="Adam: " likesAmount="8"/>
      </div>
    </div>
    
  );
}
export default MyPosts;