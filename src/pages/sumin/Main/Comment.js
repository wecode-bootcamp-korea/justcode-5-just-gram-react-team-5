import React from "react";

const Comment = ({ id, comment, onRemove }) => {
  return (
    <p key={id}>
      {<span className="bold">아이디</span>}
      {comment}
      <button
        className="delete-btn"
        onClick={() => {
          onRemove(comment.id);
        }}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </p>
  );
};

export default Comment;
