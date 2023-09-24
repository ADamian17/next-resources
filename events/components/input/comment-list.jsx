import { useEffect } from 'react';
import classes from './comment-list.module.css';

function CommentList({ comments }) {
  const commentList =
    comments &&
    comments.map((comment) => (
      <li
        key={comment._id}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <p>{comment.text}</p>
        <div>
          By <address>{comment.name}</address>
        </div>
      </li>
    ));

  return <ul className={classes.comments}>{commentList}</ul>;
}

export default CommentList;
