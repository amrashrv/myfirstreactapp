import classes from './ProfileInfo.module.css';
import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, GetStringKeys, Input, Textarea } from '../../common/formsControls/formsControls';
import style from '../../common/formsControls/formsControls.module.css'
import { profileType } from '../../../types/types';

const ProfileDataForm: React.FC<InjectedFormProps<profileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<button>Save</button>
			</div>
				{error && <div className={style.formSummaryError}>{error}</div>}
			<div>
				<b>Full name:</b> {createField<ProfileTypeKeys>("Full name", "fullName", Input, [])}
			</div>
			<div>
				<b>Looking for a job:</b> {createField<ProfileTypeKeys>("", "lookingForAJob", Input, [], {type: "checkbox"})}
			</div>
			
				<div>
					<b>My professional skills:</b> {createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", Textarea, [])}
				</div>
			
			<div>
				<b>About me:</b> {createField<ProfileTypeKeys>("About me", "aboutMe", Textarea, [])}
			</div>
			<div>
				<b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
					return <div key={key} className={classes.contact}>
						{/*to do: create some solution for emvedded objects */}
						<b>{key}: {createField(key, 'contacts.' + key, Input, [])}</b>
					</div>
				})} 
			</div>
		</form>
	)
}
const ProfileDataReduxForm = reduxForm<profileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataReduxForm;
//types 
type PropsType = {
	profile: profileType
};
type ProfileTypeKeys = GetStringKeys<profileType>;