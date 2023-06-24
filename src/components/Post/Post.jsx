import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "./Post.css";

function Post({ post }) {
  return (
    <div className="post">
      <div className="postHeader">
        <div className="primaryDetails">
          <div className="userDetails">
            <div className="profilePicture">
              <p>SB</p>
            </div>
            <div className="profile">
              <h4>{post?.fullName}</h4>
              <p>{post?.username}</p>
            </div>
          </div>
          <div className="dateCreated">
            <p>.&nbsp;&nbsp;{post?.createdAt}</p>
          </div>
        </div>
        <div className="moreOptions">
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
}

export default Post;
