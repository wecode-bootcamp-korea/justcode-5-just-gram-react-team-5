import React from "react";

const Comment = ({ comment }) => {
  return (
    <p>
      {<span className="bold">아이디</span>}
      {comment}
    </p>
  );
};

export default Comment;
