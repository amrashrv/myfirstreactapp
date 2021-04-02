import React from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, updateStatus, status}) => {
	
	if (!profile) {
		return <Preloader />
	}
	return (
		<div className={classes.description}>
			<div className={classes.profileInf}>
				<h1>{profile.fullName}</h1>
				<ProfileStatusWithHooks 
					status={status}
					updateStatus={updateStatus} />
				<h3>About me: {profile.aboutMe}</h3>
				<h3>{profile.lookingForAJob === true ? profile.lookingForAJobDescription : null}</h3>
				<h3>
					<ul>{profile.contacts.github}</ul>
					<ul>{profile.contacts.vk}</ul>
					<ul>{profile.contacts.instagram}</ul>
					<ul>{profile.contacts.facebook}</ul>
				</h3>
			</div>
			<img alt="img" src={profile.photos.large} />
		</div>
	)
}
export default ProfileInfo;