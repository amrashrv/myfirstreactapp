import React from 'react';
import MyPosts from './Myposts/Myposts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div className={classes.backgroundBlock}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>
  )
}
export default Profile;