import React from 'react';
import { profileType } from '../../types/types';
import MyPostsContainer from './Myposts/mypostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile: React.FC<PropsType> = (props) => {
	
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
//types 
type PropsType = {
	saveProfile: (profile: profileType) => Promise<any>,
	savePhoto: (file: File) => void,
	isOwner: boolean,
	profile: profileType | null,
	status: string,
	updateStatus: (status: string) => void

}