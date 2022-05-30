import React from "react";

function Comment({ info }) {
  return (
    <div>
      <li>
        <a className="feed-bold-txt" href="">
          {info.name}
        </a>
        <span>{info.content}</span>
      </li>
    </div>
  );
}

export default Comment;
