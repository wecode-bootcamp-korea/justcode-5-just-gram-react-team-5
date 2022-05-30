import React from "react";

function Comment({ info, num }) {
  return (
    <li key={num}>
      <a className="feed-bold-txt" href="">
        {info.name}
      </a>
      <span>{info.content}</span>
    </li>
  );
}

export default Comment;
