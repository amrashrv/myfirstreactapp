import React from 'react';
import {InjectedFormProps, reduxForm } from 'redux-form';
import classes from './Myposts.module.css';
import Post from './Post/Post';
import { required} from '../../../utils/validators/validators'
import { createField, GetStringKeys, Textarea } from '../../common/formsControls/formsControls';
import { postsType } from '../../../types/types';

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType> & PropsType> = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				{createField<AddPostFormValuesKyesType>("enter your post","newPostBody", Textarea, [required])}
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}
const AddPostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({ form: 'AddNewPostForm' })(AddPostForm);
const MyPosts: React.FC<MyPostsPropsType> = React.memo(props => {

	let postsElements = [...props.posts]
		.reverse()
		.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

	const addNewPost = (values: AddPostFormValuesType) => {
		props.addPost(values.newPostBody);
	};

	return <div className={classes.post}>
		<div className={classes.newpost}>
			<AddPostFormRedux onSubmit={addNewPost} />
		</div>
		<div className={classes.myposts}>
			{postsElements}
		</div>
	</div>;
});

export default MyPosts;
//types
type PropsType = {}
type MyPostsPropsType = {
	posts: Array<postsType>
	addPost: (newPostBody: string) => void
}
type AddPostFormValuesKyesType = GetStringKeys<AddPostFormValuesType>
type AddPostFormValuesType = {
	newPostBody: string
}
