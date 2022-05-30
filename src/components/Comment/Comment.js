import React from "react";
import "./Comment.scss";
function Comment({ info, onRemove }) {
  const userName = "mad0627";
  return (
    <div className="main-feed-comment-wrapper" style={{}}>
      <div>
        <span style={{ fontWeight: 700, marginRight: 5 }}>{userName}</span>
        <span>{info.text}</span>
      </div>
      <div>
        <button
          className="main-feed-comment-delete"
          type="button"
          onClick={() => onRemove(info.id)}
        >
          X
        </button>
      </div>
    </div>
  );
}
export default Comment;
