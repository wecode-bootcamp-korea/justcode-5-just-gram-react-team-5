import React from "react";
function Comment({ text }) {
  const userName = "mad0627";
  return (
    <div style={{ marginLeft: 10, marginBottom: 5, width: "400px" }}>
      <span style={{ fontWeight: 700, marginRight: 5 }}>{userName}</span>
      <span>{text}</span>
    </div>
  );
}
export default Comment;
