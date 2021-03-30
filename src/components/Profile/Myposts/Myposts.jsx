import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Myposts.module.css';
import Post from './Post/Post';
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/formsControls/formsControls';

const maxLength10 = maxLengthCreator(10);
const AddPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea} name="newPostBody" placeholder="enter your post" validate={[required, maxLength10]} />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const AddPostFormRedux = reduxForm({ form: 'AddNewPostForm' })(AddPostForm);

window.props = [];
const MyPosts = React.memo(props => {

	let postsElements = [...props.posts]
		.reverse()
		.map(p => <Post message={p.message} likesCount={p.likesCount} />);

	const addNewPost = values => {
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