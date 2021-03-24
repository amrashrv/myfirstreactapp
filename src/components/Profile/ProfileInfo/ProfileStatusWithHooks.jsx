import React, { useState } from 'react';
// let arr = [0, () => {}];
// let [a, setA] = arr;
const ProfileStatusWithHooks = (props) => {
	// let stateWithSetState = useState(true);
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);
	// let editMode = stateWithSetState[0];
	// let setEditMode = stateWithSetState[1];
	const activateEditMode = () => {
		setEditMode(true);
	}
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value); 
	}
	return (
		<div>
			{!editMode &&
				<div>
					<span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
				</div>
			}
		</div>)
}
		

export default ProfileStatusWithHooks;