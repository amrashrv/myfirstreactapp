import React from 'react';
import { posts } from '../../..';
import classes from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postsElements = props.posts
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