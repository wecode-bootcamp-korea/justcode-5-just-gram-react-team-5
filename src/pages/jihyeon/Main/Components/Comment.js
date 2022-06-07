import React from "react";

function Comment({ feed, feeds, setFeeds, num }) {
  const isLikedBtn = (a) => {
    if (a.isLiked === true) {
      return <i className="fa-solid fa-heart fa-xs" style={{ color: "tomato" }}></i>;
    }
    return <i className="fa-regular fa-heart fa-xs"></i>;
  };

  const onClickLikeBtn = (i) => {
    setFeeds(
      [...feeds],
      (feeds[num].commentList[i].isLiked = !feeds[num].commentList[i].isLiked)
    );
  };

  const deleteComment = (i) => {
    setFeeds([...feeds], feeds[num].commentList.splice(i, 1));
  };

  return (
    <ul className="comment-list">
      {feed.commentList.map((a, i) => {
        return (
          <li key={i}>
            <div>
              <a className="feed-bold-txt" href="">
                {a.name}
              </a>
              <span>{a.content}</span>
            </div>
            <div>
              <button
                onClick={() => onClickLikeBtn(i)}
                type="button"
                className="comment-heart-btn">
                {isLikedBtn(a)}
              </button>
              <button
                onClick={() => {
                  deleteComment(i);
                }}
                type="button">
                <i className="fa-regular fa-x  fa-xs"></i>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Comment;
