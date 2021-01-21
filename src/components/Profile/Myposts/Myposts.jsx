import React from 'react';
import classes from './Profile.module.css';

const MyPosts = () => {
  return <div className={classes.content}>
    <div className="myposts">
      My posts
      <div className="newpost">
        New Post
      </div>
      <div className="item">
        post 1
      </div>
      <div className="item">
        post 2
      </div>
    </div>
  </div>

}
export default Profile;