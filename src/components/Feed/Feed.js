import React, { useRef, useState } from "react";
import Comment from "../Comment/Comment";
import "./Feed.scss";

function Feed({ data }) {
  const [cmt, setCmt] = useState("");
  const [cmtArr, setCmtArr] = useState([]);
  const id = useRef(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setCmtArr(() => {
      if (cmt.length > 0) {
        return cmtArr.concat({
          id,
          text: cmt,
        });
      }
      return cmtArr;
    });
    setCmt("");
  };

  return (
    <div className="main-feed-wrapper">
      <div className="main-feed-header">
        <img
          className="main-feed-header-img"
          src={data.user.image}
          alt="유저이미지"
        />
        <span className="main-feed-header-userId">{data.user.name}</span>
      </div>
      <img
        className="main-feed-feedImage"
        src={data.feedImage}
        alt="피드이미지"
      />
      <div className="main-feed-likes">
        <img
          className="main-feed-likes-image"
          src={data.likeUser.image}
          alt="who liked this post"
        />
        <span className="main-feed-likes-textInfo">
          <b>{data.likeUser.name}</b>님 <b>외 {data.likeUser.likes}</b>명이
          좋아합니다
        </span>
      </div>
      <div className="main-feed-text">
        <b>{data.user.name}</b>
        <span>{data.content}</span>
      </div>
      <div className="main-feed-comments">
        {data.commentList.map((el) => (
          <div className="main-feed-comment" key={el.id}>
            <b>{el.name}</b>
            <span>{el.content}</span>
          </div>
        ))}
        {cmtArr.map((el) => (
          <Comment key={el.id} info={el} />
        ))}
      </div>
      <div className="main-feed-comment-write">
        <form onSubmit={onSubmit} className="main-feed-comment-form">
          <input
            value={cmt}
            onChange={(e) => setCmt(e.target.value)}
            className="main-feed-comment-input"
            type="text"
            placeholder="댓글 달기..."
          />
          <button className="main-feed-comment-submit">게시</button>
        </form>
      </div>
    </div>
  );
}
export default Feed;
