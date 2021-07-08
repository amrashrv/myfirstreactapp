import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { appStateType } from '../../redux/reduxStore';
import { follow, unfollow, requestUsers, FilterType} from '../../redux/usersReducer';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers, getUsersFilter} from '../../redux/usersSelectors';
import { usersType } from '../../types/types';
import Preloader from '../common/preloader/preloader';
import Users from './Users';

class UsersContainer extends React.Component<propsType> {
	componentDidMount() {
		let {currentPage, pageSize, filter} = this.props
		this.props.getUsers(currentPage, pageSize, filter);
	}
	onPageChanged = (pageNumber: number) => {
		let {pageSize, filter} = this.props;
		this.props.getUsers(pageNumber, pageSize, filter);
	}
	onFilterChanged = (filter: FilterType) => {
		const {pageSize} = this.props;
		this.props.getUsers(1, pageSize, filter)
	}
	render() {
		
		return <>
		{/* {this.props.isFetching ? <style>{loader}</style>  : null} */}
		<h2>{this.props.pageTitle}</h2>
		{this.props.isFetching ? <Preloader/> : null}
		<Users 
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			users={this.props.users}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			followingInProgress={this.props.followingInProgress}
			onFilterChanged={this.onFilterChanged}
		/>
		</>
	}
}
//creating users mapstate to props
let mapStateToProps = (state: appStateType): mapStatepropsType => {

	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		filter: getUsersFilter(state)
	}
}
//redirecting to Login page if user is not logined
export default compose(
	//withAuthRedirect,
	connect<mapStatepropsType, mapDispatchepropsType, ownPropsType, appStateType>(mapStateToProps, {follow, unfollow,  getUsers: requestUsers}),
)(UsersContainer)

//types
type mapStatepropsType ={
	currentPage: number,
	pageSize: number,
	isFetching: boolean,
	totalUsersCount: number,
	users: Array<usersType>,
	followingInProgress: Array<number>
	filter: FilterType
	
}
type ownPropsType ={
	pageTitle: string
	
}
type mapDispatchepropsType ={
	follow: (userId: number) => void,
	unfollow: (userId: number) => void,
	getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void,
	
}

type propsType = mapStatepropsType & mapDispatchepropsType & ownPropsType