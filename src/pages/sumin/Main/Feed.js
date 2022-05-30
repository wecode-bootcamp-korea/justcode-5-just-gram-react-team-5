import React, { useState } from "react";
import Comment from "./Comment";

function Feed({ data }) {
  const [comment, setComment] = useState("");
  const [space, setSpace] = useState([]);

  function inputText(event) {
    setComment(event.target.value);
  }

  const enterBtn = (event) => {
    if (event.key === "Enter") {
      setSpace((prevComment) => {
        return [...prevComment, comment];
      });
    }
    setComment("");
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
            <button className="button__icon-like">
              <i className="fa-solid fa-heart"></i>
            </button>
            <button className="button__icon-comment">
              <i className="fa-regular fa-comment fa-flip-horizontal"></i>
            </button>
            <button className="button__icon-share">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </button>
          </span>
          <span>
            <button className="button__icon-bookmark">
              <i className="fa-regular fa-bookmark"></i>
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
            {space.map((comment, data) => {
              return <Comment key={data.id} comment={comment} />;
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
            setSpace((prevComment) => {
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
