import React, { useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiComment, BiBookmark, BiShareAlt } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Post.css";
import { dislikePost, likePost } from "../../utils/PostUtils";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";

function Post({ post }) {
  const { authState } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);

  const isLikedAlready = post?.likes?.likedBy.find(
    (user) => user?.username === authState?.user?.username
  );

  console.log(post);

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
                <h4>
                  {post?.fullName || post?.firstName + " " + post?.lastName}
                </h4>
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
        <div className="postContent">
          <p>{post?.content}</p>
        </div>
        <div className="media">
          {post?.mediaUrl && post?.type === "video" && (
            <video className="postImage" controls autoPlay muted loop>
              <source src={post?.mediaUrl} />
            </video>
          )}
          {post?.mediaUrl && post?.type === "image" && (
            <img className="postImage" src={post?.mediaUrl} alt="postImg" />
          )}
        </div>
        <div className="postActions">
          <div className="actionsContainer">
            <BiComment size={20} />
            <span>{post?.comments.length}</span>
          </div>
          <div className="actionsContainer">
            {isLikedAlready ? (
              <AiFillHeart
                size={22}
                onClick={() =>
                  dislikePost(post?._id, authState?.token, dataDispatch)
                }
              />
            ) : (
              <AiOutlineHeart
                size={22}
                onClick={() =>
                  likePost(post?._id, authState?.token, dataDispatch)
                }
              />
            )}

            <span>{post?.likes?.likeCount}</span>
          </div>
          <BiShareAlt size={20} />
          <BiBookmark size={20} />
        </div>
      </div>
    </div>
  );
}

export default Post;
