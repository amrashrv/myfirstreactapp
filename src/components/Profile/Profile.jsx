import React from 'react';
import MyPosts from './Myposts/Myposts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={classes.topImage}>
        <img src="https://rasterbatorapi.azureedge.net/images/r1.jpg" />
      </div>
      <div className={classes.description}>
        <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img>
      </div>
      <MyPosts />
    </div>
  )
}
export default Profile;