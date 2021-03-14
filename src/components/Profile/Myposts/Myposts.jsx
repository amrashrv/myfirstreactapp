import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElements =
		props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

	const addNewPost = (values) => {
		props.addPost(values.newPostBody)
	}
	return (
		<div className={classes.post}>
			<div className={classes.newpost}>
				<AddPostFormRedux onSubmit={addNewPost} />
			</div>
			<div className={classes.myposts}>
				{postsElements}
			</div>
		</div>
	);
}

const AddPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component="textarea" name="newPostBody" placeholder="enter your post" />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const AddPostFormRedux = reduxForm({
	form: 'AddNewPostForm'
})(AddPostForm);

export default MyPosts;