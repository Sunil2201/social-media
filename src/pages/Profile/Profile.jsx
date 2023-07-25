import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import "./Profile.css";
import { followUser, unfollowUser } from "../../utils/UserUtils";
import Post from "../../components/Post/Post";

function Profile({openModal}) {
  const { authState, authDispatch } = useContext(AuthContext);
  const { dataState } = useContext(DataContext);
  const { username } = useParams();
  const navigate = useNavigate();

  const currentUser = [...dataState?.users].find(
    (user) => user.username === username
  );

  const isFollowingCurrentUser = [...authState?.user?.following].find(
    (user) => user?.username === currentUser?.username
  );

  const fullName = currentUser?.firstName + " " + currentUser?.lastName;

  const postsOfCurrentUser = [...dataState?.posts].filter(
    (post) => post?.username === username
  );

  const noOfPosts = [...dataState?.posts].filter(
    (post) => post?.username === username
  ).length;

  const navigateToHome = () => {
    navigate("/");
  };

  const handleUnfollowUser = () => {
    unfollowUser(currentUser?._id, authState?.token, authDispatch);
  };

  const handleFollowUser = () => {
    followUser(currentUser?._id, authState?.token, authDispatch);
  };

  return (
    <section className="profileSection">
      <div className="profileHeader">
        <FaArrowLeft style={{ cursor: "pointer" }} onClick={navigateToHome} />
        <div className="userProfileBasicInfo">
          <h3>{fullName}</h3>
          <p>{noOfPosts} Posts</p>
        </div>
      </div>
      <div className="profilePrimaryInfo">
        <div className="profilePicAndActionContainer">
          <img src={currentUser?.profileAvatar} alt="profile-pic" />
          {authState?.user?.username === currentUser?.username ? (
            <button>Edit Profile</button>
          ) : isFollowingCurrentUser !== undefined ? (
            <button onClick={handleUnfollowUser}>Following</button>
          ) : (
            <button onClick={handleFollowUser}>Follow</button>
          )}
        </div>
        <div className="userPrimaryInfo">
          <h3>{fullName}</h3>
          <p>@{currentUser?.username}</p>
        </div>
        <p className="userAboutInfo">{currentUser?.about}</p>
        <div className="userWebsiteAndJoinedDate">
          <a className="userWebsite" href={currentUser?.website}>
            {currentUser?.website}
          </a>
          <p>Joined {currentUser?.createdAt}</p>
        </div>
        <div className="userSecondaryInfo">
          <p>
            {noOfPosts}
            <span>Posts</span>
          </p>
          <p>
            {currentUser?.following.length}
            <span>Following</span>
          </p>
          <p>
            {currentUser?.followers.length}
            <span>Followers</span>
          </p>
        </div>
      </div>
      <div className="profilePosts">
        {[...postsOfCurrentUser].map(post => {
          return(
            <Post post={post} openModal={openModal} />
          )
        })}
      </div>
    </section>
  );
}

export default Profile;
