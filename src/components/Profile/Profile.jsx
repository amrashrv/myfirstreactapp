import React from 'react';
import MyPostsContainer from './Myposts/mypostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	
	return (
		
		<div className={classes.backgroundBlock}>
			<ProfileInfo
				saveProfile={props.saveProfile}
				savePhoto={props.savePhoto}
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus} />
			<MyPostsContainer />
		</div>
	)
}
export default Profile;