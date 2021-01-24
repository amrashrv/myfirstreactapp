import React from 'react';
import MyPosts from './Myposts/Myposts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={classes.backgroundBlock}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}
export default Profile;