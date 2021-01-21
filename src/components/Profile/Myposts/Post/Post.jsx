import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img src="https://miro.medium.com/max/600/0*eIutoeUo8rPA13e0.jpg" />
        {props.user}
        {props.message}
        <div>
          <span>{props.likesAmount} Likes</span>
        </div>

      </div>
    </div>

  );
}
export default Post;