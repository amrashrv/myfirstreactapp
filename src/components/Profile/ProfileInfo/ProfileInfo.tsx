import React, { ChangeEvent, useState } from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/images.png';
import ProfileDataReduxForm from './ProfileDataForm';
import { contactsType, profileType } from '../../../types/types';



const ProfileInfo: React.FC<PropsType> = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }) => {
	let [editMode, setEditMode] = useState(false);
	if (!profile) {
		return <Preloader />
	}
	
	const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData: profileType ) => {
		//todo: re
		saveProfile(formData).then(() => {
			setEditMode(false);
		});
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
						? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
						: <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
				</div>

			</div>
			<img alt="img" src={profile.photos.large || userPhoto} />
			{ isOwner && <input type={"file"} onChange={onMainPhotoSelected}></input>}
		</div >
	)
}
const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
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
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof contactsType]} />
				})}
			</div>
		</div>)
}
const Contact: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
	return <div className={classes.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;
///types 
type PropsType = {
	profile: profileType | null,
	updateStatus:(status: string)=> void ,
	status: string,
	isOwner: boolean,
	savePhoto: (file: File) => void,
	saveProfile: (profile: profileType) => Promise<any>
}
type ProfileDataPropsType = {
	profile: profileType,
	isOwner: boolean,
	goToEditMode: () => void
}
type ContactsPropsType = { 
	contactTitle: string, 
	contactValue: string
}