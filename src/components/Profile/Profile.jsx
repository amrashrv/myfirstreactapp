import React from 'react';
import MyPostsContainer from './Myposts/mypostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div className={classes.backgroundBlock}>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
  )
}
export default Profile;