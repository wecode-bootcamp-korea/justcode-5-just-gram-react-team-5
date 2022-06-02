import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
library.add(faHeart);
const Comments = ({ userName, content }) => {
  const [likeBtn, setLikeBtn] = useState(false);
  const likeBtnactivation = () => {
    setLikeBtn(!likeBtn);
  };
  const [deleteBtn, setdeleteBtn] = useState(false);
  const deleteComment = () => {
    setdeleteBtn(true);
  };
  return (
    <>
      {deleteBtn ? (
        <></>
      ) : (
        <div className="comment-content-wrapper">
          <div className="username-content">
            <span className="username">{userName} </span> {content}
          </div>
          <div className="liketrashbtn">
            <FontAwesomeIcon
              icon="fa-regular fa-heart"
              className="likeBtn"
              onClick={likeBtnactivation}
              style={{ color: likeBtn ? "red" : "gray" }}
            />
            <FontAwesomeIcon
              icon="fa-regular fa-trash-can"
              onClick={deleteComment}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
