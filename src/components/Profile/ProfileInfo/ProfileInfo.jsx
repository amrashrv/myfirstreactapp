import React, { useState } from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/images.png';
import ProfileDataReduxForm from './ProfileDataForm';



const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }) => {
	let [editMode, setEditMode] = useState(false);
	if (!profile) {
		return <Preloader />
	}
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}
	const onSubmit = (formData) => {
		saveProfile(formData);
		//setEditMode(false);
	}
	return (
		<div className={classes.description}>
			<div className={classes.profileInf}>
				<h1>{profile.fullName}</h1>
				<ProfileStatusWithHooks
					status={status}
					updateStatus={updateStatus} />
				<div>
					{editMode 
					? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
					: <ProfileData goToEditMode={() => {setEditMode(true)}}profile={profile} isOwner={isOwner}/>}
				</div>

			</div>
			<img alt="img" src={profile.photos.large || userPhoto} />
			{ isOwner && <input type={"file"} onChange={onMainPhotoSelected}></input>}
		</div >
	)
}

const ProfileData = ({ profile, isOwner, goToEditMode}) => {
	return (
		<div>
			<div>
				{isOwner && <button onClick={goToEditMode}>Add info</button>}
			</div>
			<div>
				<b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
			</div>
			{profile.lookingForAJob &&
				<div>
					<b>My professional skills:</b> {profile.lookingForAJobDescription}
				</div>
			}
			<div>
				<b>About me:</b> {profile.aboutMe}
			</div>
			<div>
				<b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
				})}
			</div>
		</div>)
}

const Contact = ({ contactTitle, contactValue }) => {
	return <div className={classes.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;