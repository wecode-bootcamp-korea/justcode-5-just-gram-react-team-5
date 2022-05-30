import React from "react";

function Comment({ info }) {
  const userName = "mad0627";
  return (
    <div
      style={{
        marginLeft: 10,
        marginBottom: 3,
        width: "400px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <span style={{ fontWeight: 700, marginRight: 5 }}>{userName}</span>
        <span>{info.text}</span>
      </div>
      <div>{/* <button onClick={() => onRemove(info.id)}>x</button> */}</div>
    </div>
  );
}
export default Comment;
