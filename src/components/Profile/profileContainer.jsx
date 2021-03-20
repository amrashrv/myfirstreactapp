import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push("/Login");
			}
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}
	render() {
		return (
			<Profile {...this.props} 
			profile={this.props.profile} 
			status={this.props.status}
			updateStatus={this.props.updateStatus} />
		)
	}
}
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(ProfileContainer);