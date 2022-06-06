import React from "react";
import "./Comments.scss";

function Comments({ comment }) {
  return (
    // <div className="feed-commentlist">
    // <div className="feed-comments" key={comment.id}>
    // <span className="comment-name">{comment.name}</span>
    // <span >{comment.content}</span>
    // </div>
    // </div>
    <div className="new_comment">
      <p>
        <span className="bold">Smiles</span>
        {comment}
      </p>
    </div>
  );
}

export default Comments;
