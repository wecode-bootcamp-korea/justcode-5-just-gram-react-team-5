import React from "react";

function comment({ user, setuser, num, text, settext }) {
  return (
    <li key={num}>
      <a className="feed-bold-txt" href="">
        {user[num]}
      </a>
      <span>{text[num]}</span>
    </li>
  );
}

export default comment;
