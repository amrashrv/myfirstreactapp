import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, post: "First Post", likes: 5},
    { id: 2, post: "Second Post", likes: 105 },
    { id: 3, post: "Third post", likes: 26 }
  ];
  let postsElements = postsData
    .map(post => <Post message={post.post}  likesAmount={post.likes} />)
  return (
    <div className={classes.post}>
      <div className={classes.newpost}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.myposts}>
        {postsElements}
      </div>
    </div>

  );
}
export default MyPosts;