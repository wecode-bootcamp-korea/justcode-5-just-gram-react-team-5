import React, { useState, useRef } from "react";
import Comment from "./Comment";

function Feed({ data }) {
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  function inputText(event) {
    setComment(event.target.value);
  }

  const enterBtn = (event) => {
    if (event.key === "Enter") {
      setCommentArray((prevComment) => {
        return [...prevComment, comment];
      });
      setComment("");
    } else {
      setComment(event.target.value);
    }
  };

  const onRemove = (id) => {
    const newCommentArray = [];
    for (let i = 0; i < commentArray.length; i++) {
      if (commentArray[i].id !== id) {
        newCommentArray.push(commentArray[i]);
      }
    }
    setCommentArray(newCommentArray);
  };

  const [contentLikeIcon, SetContentLikeIcon] = useState(false);
  const likeBtnClick = () => {
    SetContentLikeIcon(!contentLikeIcon);
  };

  return (
    <article key={data.id} className="main-feed__container">
      <div className="feed__header">
        <div>
          <a href="#">
            <img
              src={data.user.image}
              alt="프로필 사진"
              className="profile-common"
            />
          </a>
          <span className="bold">{data.user.name}</span>
        </div>
        <button>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>
      <div className="feed__photo">
        <img src={data.feedImage} alt="피드 사진" />
      </div>
      <div className="feed__comment-group">
        <div className="comment__button-group">
          <span>
            <button onClick={likeBtnClick}>
              {contentLikeIcon ? (
                <i className="fa-regular fa-heart"></i>
              ) : (
                <i className="fa-solid fa-heart button__icon-like"></i>
              )}
            </button>
            <button>
              <i className="fa-regular fa-comment fa-flip-horizontal button__icon-comment"></i>
            </button>
            <button>
              <i className="fa-solid fa-arrow-up-from-bracket button__icon-share"></i>
            </button>
          </span>
          <span>
            <button>
              <i className="fa-regular fa-bookmark button__icon-bookmark"></i>
            </button>
          </span>
        </div>
        <div className="comment__like-list">
          <a href="#">
            <img
              src={data.likeUser.image}
              alt="프로필 사진"
              className="profile-common"
            />
          </a>
          <span className="bold">{data.likeUser.name}</span>
          <span className="gap">님</span>
          <span className="bold">외 {data.likeUser.likes}명</span>이 좋아합니다
        </div>
        <div className="comment__contents-group">
          <div className="comment__contents">
            <p>
              <span className="bold">{data.user.name}</span>
              {data.content}
            </p>
            <button>더보기</button>
          </div>
          <div className="comment__writer">
            {data.commentList.map((txt) => {
              return (
                <p key={txt.id}>
                  {<span className="bold">{txt.name}</span>}
                  {txt.content}
                </p>
              );
            })}
            {commentArray.map((comment, id) => {
              return <Comment key={id} comment={comment} onRemove={onRemove} />;
            })}
          </div>
        </div>
      </div>
      <div className="comment__input">
        <input
          type="text"
          className="comment__write"
          placeholder="댓글 달기..."
          value={comment}
          onChange={inputText}
          onKeyPress={enterBtn}
        />
        <button
          className="comment__write-btn"
          onClick={() => {
            setCommentArray((prevComment) => {
              return [...prevComment, comment];
            });
            setComment("");
          }}
        >
          게시
        </button>
      </div>
    </article>
  );
}

export default Feed;
