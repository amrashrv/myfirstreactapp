import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { follow, setCurrentPage, unfollow,  toggleFollowingProgress, requestUsers} from '../../redux/usersReducer';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers} from '../../redux/usersSelectors';
import Preloader from '../common/preloader/preloader';
import Users from './Users';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}
	render() {
		console.log('render')
		return <>
		{/* {this.props.isFetching ? <style>{loader}</style>  : null} */}
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
		/>
		</>
	}
}
//creating users mapstate to props
let mapStateToProps = (state) => {
	console.log("mapStateToProps Users")
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state) ,
		followingInProgress: getFollowingInProgress(state)
	}
}
//redirecting to Login page if user is not logined
export default compose(
	//withAuthRedirect,
	connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers}),
)(UsersContainer)