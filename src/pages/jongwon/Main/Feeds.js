/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Comments from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

library.add(faHeart, faComment, faShareFromSquare, faBookmark, faTrashCan);

const Feeds = (props) => {
  const [commentlist, setCommentlist] = useState(props.commentList);
  const [inputText, setInputText] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputText = (event) => {
    const { value } = event.target;
    setInputText(value);
  };
  const commentValidation = () => {
    if (!(inputText === "")) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const uploadComment = () => {
    setCommentlist([...commentlist, { name: "2seul2", content: inputText }]);
    setInputText("");
    setIsValid(false);
  };
  const [likeBtn, setLikeBtn] = useState(false);

  const likeBtnactivation = () => {
    setLikeBtn(!likeBtn);
  };
  return (
    <>
      <article>
        <header className="feedtop">
          <div className="profile">
            <img className="doraemon" src={props.userImage} />
            <span className="username"> {props.userName} </span>
          </div>
          <span>...</span>
        </header>
        <img className="doraemonfeed" src={props.feedImage} />
        <div className="feedbottom">
          <div className="feedbottom-iconwrapper">
            <div className="feedbottom-icons">
              <FontAwesomeIcon
                icon="fa-regular fa-heart"
                className="likeBtn"
                onClick={likeBtnactivation}
                style={{ color: likeBtn ? "red" : "gray" }}
              />
              <FontAwesomeIcon icon="fa-regular fa-comment" />
              <FontAwesomeIcon icon="fa-regular fa-share-from-square" />
            </div>
            <FontAwesomeIcon icon="fa-regular fa-bookmark" />
          </div>
          <div className="profile">
            <img src={props.likedImage} />
            <div className="howmanylikes">
              <span className="username"> {props.whoLiked}</span> ??? ???
              <span className="username"> {props.likes} ???</span> ??? ???????????????
            </div>
          </div>
          <div className="feedbottom-bottom">
            <div className="caption">
              <span className="username">{props.userName} </span>{" "}
              {props.content}
            </div>
            <div className="comment-wrapper">
              <div className="commentlist">
                <div className="comment-content-wrapper"></div>
              </div>
              {commentlist.map((oneComment) => {
                return (
                  <Comments
                    key={oneComment.id}
                    userName={oneComment.name}
                    content={oneComment.content}
                    isLiked={oneComment.isLiked}
                  />
                );
              })}
            </div>
            <div className="description">1?????????</div>
          </div>
        </div>
        <div className="makecomment">
          <input
            className="makecomment-box"
            type="text"
            placeholder="????????????..."
            onChange={handleInputText}
            onKeyUp={commentValidation}
            value={inputText}
          />
          <input
            className="publish-button"
            type="button"
            value="??????"
            disabled={isValid ? false : true}
            style={{ opacity: isValid ? "1" : "0.2" }}
            onClick={uploadComment}
          />
        </div>
      </article>
    </>
  );
};

export default Feeds;
