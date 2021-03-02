import React from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={classes.description}>
      <div className={classes.profileInf}>
        <h1>{props.profile.fullName}</h1>
        <h3>About me: {props.profile.aboutMe}</h3>
        <h3>{props.profile.lookingForAJob === true ? props.profile.lookingForAJobDescription : null}</h3>
        <h3>
          <ul>{props.profile.contacts.github}</ul>
          <ul>{props.profile.contacts.vk}</ul>
          <ul>{props.profile.contacts.instagram}</ul>
          <ul>{props.profile.contacts.facebook}</ul>
        </h3>
      </div>
      <img alt="img" src={props.profile.photos.large} />
    </div>
  )
}
export default ProfileInfo;