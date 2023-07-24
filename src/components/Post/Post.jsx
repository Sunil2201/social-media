import React, { useContext, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiComment, BiShareAlt } from "react-icons/bi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Post.css";
import { deletePost, dislikePost, likePost } from "../../utils/PostUtils";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { addBookmark, removeBookmark } from "../../utils/UserUtils";
import { PostModalContext } from "../../contexts/PostModalContext";
import CommentsSection from "../CommentsSection/CommentsSection";
import {
  addCommentsService,
  getCommentsService,
} from "../../services/PostServices";
import { useNavigate } from "react-router-dom";

function Post({ post, openModal }) {
  const { authState } = useContext(AuthContext);
  const { dataState, dataDispatch } = useContext(DataContext);
  const { handleFormEdit } = useContext(PostModalContext);
  const navigate = useNavigate()

  const firstName = authState?.user?.firstName;
  const lastName = authState?.user?.lastName;
  const username = authState?.user?.username;
  const avatarUrl = authState?.user?.profileAvatar;

  const [showPostActionsMenu, setShowPostActionMenu] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    firstName,
    lastName,
    username,
    avatarUrl,
    text: "",
  });

  const isLikedAlready = post?.likes?.likedBy.find(
    (user) => user?.username === authState?.user?.username
  );

  const isBookmarkedAlready = [...dataState?.bookmarks].find(
    (bookmark) => post?._id === bookmark?._id
  );

  const handlePostActionsMenu = () => {
    setShowPostActionMenu((prevState) => !prevState);
  };

  const handleDeletePost = () => {
    setShowPostActionMenu(false);
    deletePost(post?._id, authState?.token, dataDispatch);
  };

  const handleEditPost = (postToEdit) => {
    setShowPostActionMenu(false);
    openModal();
    handleFormEdit(postToEdit);
  };

  const toggleCommentSectionAndGetComments = async () => {
    setShowComments((prevState) => !prevState);
    const res = await getCommentsService(post?._id);
    const resJson = await res.json();
    setComments(resJson?.comments);
  };

  const handleChange = (e) => {
    setComment((prev) => ({ ...prev, text: e.target.value }));
  };

  const handleAddComment = async () => {
    const res = await addCommentsService(post?._id, comment, authState?.token);
    const resJson = await res.json();
    const modifiedPosts = resJson?.posts;
    const postOnWhichCommentIsAdded = [...modifiedPosts].find(
      (singlePost) => singlePost?._id === post?._id
    );
    setComments(postOnWhichCommentIsAdded?.comments);
    setComment({ firstName, lastName, username, avatarUrl, text: "" });
  };

  const currentUser = [...dataState?.users]?.find(({username}) => username === post?.username)

  const navigateToUserProfile = () => {
    navigate(`/profile/${currentUser?.username}`)
  };

  return (
    <div className="post">
      <div
        className="profilePicture"
        onClick={navigateToUserProfile}
      >
        <p>SB</p>
      </div>
      <div className="postDetails">
        <div className="postHeader">
          <div className="primaryDetails">
            <div className="userDetails">
              <div
                className="profile"
                onClick={navigateToUserProfile}
              >
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
          {authState?.user?.username === post?.username && (
            <div onClick={handlePostActionsMenu} className="moreOptions">
              <BsThreeDots />
            </div>
          )}
          {showPostActionsMenu && (
            <div className="postActionsMenu">
              <p onClick={() => handleEditPost(post)}>Edit Post</p>
              <p onClick={handleDeletePost}>Delete Post</p>
            </div>
          )}
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
            <BiComment onClick={toggleCommentSectionAndGetComments} size={20} />
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
          {isBookmarkedAlready ? (
            <FaBookmark
              size={20}
              onClick={() =>
                removeBookmark(post?._id, authState?.token, dataDispatch)
              }
            />
          ) : (
            <FaRegBookmark
              size={20}
              onClick={() =>
                addBookmark(post?._id, authState?.token, dataDispatch)
              }
            />
          )}
        </div>
        {showComments && (
          <CommentsSection
            comments={comments}
            comment={comment}
            handleChange={handleChange}
            handleAddComment={handleAddComment}
          />
        )}
      </div>
    </div>
  );
}

export default Post;
