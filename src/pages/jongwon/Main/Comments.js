import React from "react";
const Comments = ({ userName, content }) => {
  return (
    <>
      <div className="comment-content-wrapper">
        <div className="username-content">
          <span className="username">{userName} </span> {content}
        </div>
        <i className="fa-regular fa-heart"></i>
      </div>
    </>
  );
};

export default Comments;
