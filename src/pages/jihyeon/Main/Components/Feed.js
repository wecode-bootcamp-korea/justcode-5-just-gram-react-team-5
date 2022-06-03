import React, { useEffect, useState } from "react";
import Comment from "./Comment";

function Feed() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/commentData.json")
      .then((res) => res.json())
      .then((data) => {
        setFeeds(data);
      });
  }, []);

  const [newComment, setNewComment] = useState({
    id: "",
    name: "jihyeon-kimy",
    content: "",
    isLiked: false,
  });

  const addNewComment = (num) => {
    setFeeds([...feeds], feeds[num].commentList.push(newComment));
    setNewComment({ ...newComment, content: "" });
  };

  const onClickLikeBtn = (num) => {
    setFeeds(
      feeds.map((feed) =>
        feed.id === num + 1 ? { ...feed, isLiked: !feed.isLiked } : feed
      )
    );
  };

  const isLikedBtn = (feed) => {
    if (feed.isLiked === true) {
      return <i className="fa-solid fa-heart fa-lg" style={{ color: "tomato" }}></i>;
    }
    return <i className="fa-regular fa-heart fa-lg"></i>;
  };

  return (
    <div>
      {feeds.map((feed, num) => {
        return (
          <article className="feed" key={num}>
            <header className="feed-header">
              <div className="feed-author">
                <a href="">
                  <img className="user-img" src={feed.user.image} alt="유저 이미지" />
                </a>
                <a className="feed-bold-txt" href="">
                  {feed.user.name}
                </a>
              </div>
              <button type="button">
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </header>

            <img className="feed-img" src={feed.feedImage} alt="post" />

            <div className="feed-content">
              <div className="feed-buttons">
                <div>
                  <button onClick={() => onClickLikeBtn(num)} type="button">
                    {isLikedBtn(feed)}
                  </button>
                  <button type="button">
                    <i className="fa-regular fa-comment fa-lg"></i>
                  </button>
                  <button type="button">
                    <i className="fa-regular fa-paper-plane fa-lg"></i>
                  </button>
                </div>
                <button type="button">
                  <i className="fa-regular fa-bookmark fa-lg"></i>
                </button>
              </div>

              <div className="like">
                <a href="">
                  <img
                    className="user-img-s"
                    src={feed.likeUser.image}
                    alt="user profile"
                  />
                </a>
                <a className="feed-bold-txt" href="">
                  {feed.likeUser.name}
                </a>
                님{" "}
                <a className="feed-bold-txt" href="">
                  외 <span>{feed.likeUser.likes}</span>명
                </a>
                이 좋아합니다.
              </div>

              <Comment feed={feed} />

              <div className="upload-time">
                <span>42분</span> 전
              </div>
            </div>

            <div className="comment-box">
              <input
                value={newComment.content}
                type="text"
                placeholder="댓글 달기..."
                onChange={(e) => {
                  setNewComment({ ...newComment, content: e.target.value });
                }}
                onKeyUp={(e) => {
                  if (e.key == "Enter") {
                    addNewComment(num);
                  }
                }}
              />

              <button
                type="button"
                onClick={() => {
                  addNewComment(num);
                }}
              >
                게시
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Feed;
