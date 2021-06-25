import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from '../../redux/profileReducer';
import { appStateType } from '../../redux/reduxStore';
import { profileType } from '../../types/types';
import Profile from './Profile';

class ProfileContainer extends React.Component<PropsType> {
	refreshProfile(){
		let userId: number | null = +this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push("/Login");
			}
		}
		if (!userId){
			throw new Error("ID should exsists in URI params or in state ('authorizedUserId')");
		} else  {
			this.props.getUserProfile(userId);
			this.props.getStatus(userId);
		}
		
	}
	componentDidMount() {
		this.refreshProfile();
	}
	componentDidUpdate(prevProps: PropsType, prevState: PropsType){
		if (this.props.match.params.userId !== prevProps.match.params.userId)
		this.refreshProfile()
	}
	render() {
		//console.log("render profile")
		return (
			<Profile {...this.props}
			isOwner={!this.props.match.params.userId}
			profile={this.props.profile} 
			status={this.props.status}
			updateStatus={this.props.updateStatus}
			savePhoto={this.props.savePhoto}/>
		)
	}
}
let mapStateToProps = (state: appStateType) => {
	//console.log('mapStateToProps Profile')
	return ({
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth
	})
	
};

export default compose<React.ComponentType>(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
//types 
type MapPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
	getUserProfile: (userId: number) => void, 
	getStatus: (status: number) => void, 
	updateStatus: (status: string) => void, 
	savePhoto: (file: File) => void, 
	saveProfile: (profile: profileType) => Promise<any>
}
type PathParamsType = {
	userId: string,
}
type PropsType = MapPropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;
