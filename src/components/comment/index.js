import React from 'react';
import './styles.css';

/**
  createdAt: String,
  content: String,
  createdBy: {
    displayName: String
    avatarUrl: String,
  }
  className: String (wrapper className)
 */

const Comment = (props) => {
  return (
    <div className={props.className || "comment"}>
      <div className="vcard">
        <img src={props.createdBy.avatarUrl} alt="#" />
      </div>
      <div className="comment-body">
        <h3>{props.createdBy.displayName}</h3>
        <div className="meta">{props.createdAt}</div>
        <p className="content">{props.content}</p>
        <button className="reply">Reply</button>
      </div>
    </div>
  );
}

export default Comment;