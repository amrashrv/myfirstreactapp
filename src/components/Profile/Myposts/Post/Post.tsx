import React from 'react';
import classes from './Post.module.css';

const Post: React.FC<PropsType> = (props) => {

	return (
		<div>
			<div className={classes.item}>
				<img alt="avatar" src="https://miro.medium.com/max/600/0*eIutoeUo8rPA13e0.jpg" />
				<div>
					{props.message}
				</div>
				{props.likesCount} Likes

			</div>
		</div>

	);
}
export default Post;
//types 
type PropsType = {
	message: string,
	likesCount: number
}