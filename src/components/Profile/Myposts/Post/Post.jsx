import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img src="https://miro.medium.com/max/600/0*eIutoeUo8rPA13e0.jpg" />
        <div>
        {props.message}
        </div>
        {props.likesCount} Likes

      </div>
    </div>

  );
}
export default Post;