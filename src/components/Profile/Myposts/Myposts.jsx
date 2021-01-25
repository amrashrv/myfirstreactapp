import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, post: "First Post", likes: 5},
    { id: 2, post: "Second Post", likes: 105 },
    { id: 3, post: "Third post", likes: 26 }
  ];
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
        <Post message={postsData[0].post}  likesAmount={postsData[0].likes} />
        <Post message={postsData[1].post}  likesAmount={postsData[1].likes} />
        <Post message={postsData[2].post}  likesAmount={postsData[2].likes} />
      </div>
    </div>

  );
}
export default MyPosts;