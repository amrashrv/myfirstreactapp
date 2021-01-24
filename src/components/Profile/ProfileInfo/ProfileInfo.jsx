import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
      <div className={classes.description}>
        <div className={classes.profileInf}>
         <h1>WebDev</h1>
        </div>
        <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img>
      </div>
  )
}
export default ProfileInfo;