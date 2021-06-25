
import { connect } from 'react-redux';
import { actions } from '../../../redux/profileReducer';
import { appStateType } from '../../../redux/reduxStore';
import MyPosts, { DispatchPropsType, MyPostsPropsType } from './Myposts';

let mapStateToProps = (state: appStateType) => {
  return {
    posts: state.profilePage.posts,
  }
}

const MyPostsContainer = connect<MyPostsPropsType, DispatchPropsType, {}, appStateType>(mapStateToProps,{addPost: actions.addPostActionCreator})(MyPosts);
export default MyPostsContainer;