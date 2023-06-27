import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiComment, BiBookmark } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import "./Post.css";

function Post({ post }) {
  return (
    <div className="post">
      <div className="profilePicture">
        <p>SB</p>
      </div>
      <div className="postDetails">
        <div className="postHeader">
          <div className="primaryDetails">
            <div className="userDetails">
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
        <div className="postImage">
          <img className="postImage" src={post?.postImage} alt="post-image" />
        </div>
        <div className="postActions">
          <BiComment size={20}/>
          <AiOutlineHeart size={22}/>
          <BiBookmark size={20}/>
        </div>
      </div>
    </div>
  );
}

export default Post;
