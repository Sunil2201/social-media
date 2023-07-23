import React from "react";
import "./Comment.css";

function Comment({ comment }) {
  return (
    <div className="singleComment">
      <div className="profilePicture">SB</div>
      <div className="commentInfo">
        <div className="userInfo">
          <p>
            {comment?.firstName + " " + comment?.lastName}
          </p>
          <p>@{comment?.username}</p>
          <p>{comment?.createdAt}</p>
        </div>
        <p className="comment">{comment?.text}</p>
      </div>
    </div>
  );
}

export default Comment;
