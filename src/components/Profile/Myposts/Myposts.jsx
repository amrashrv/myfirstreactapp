import React from 'react';
import { postsData } from '../../..';
import classes from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  
  let postsElements = postsData
    .map(post => <Post message={post.post}  likesAmount={post.likes} />)
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
        {postsElements}
      </div>
    </div>

  );
}
export default MyPosts;