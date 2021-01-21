import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return <div className={classes.content}>
    <div>
      <img src="https://rasterbatorapi.azureedge.net/images/r1.jpg" />
    </div>
    <div className={classes.description}>
      <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img>
    </div>
    <div className="posts">
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