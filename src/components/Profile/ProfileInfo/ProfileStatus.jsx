import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: true,
		title: "Yo"
	}
	activateEditMode = () => {
		//console.log(this.state.editMode);
		this.setState({
			editMode: true,
		})
		//console.log(this.state.editMode);
	}
	deactivateEditMode = () => {
		//console.log(this.state.editMode);
		this.setState({
			editMode: false,
		})
		//console.log(this.state.editMode);
	}
	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
					</div>
				}
			</div>
		)
	}
}
export default ProfileStatus;