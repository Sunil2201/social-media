import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";
import ExploreUsers from "../../components/Explore Users/ExploreUsers";
import { DataContext } from "../../contexts/DataContext";
import CreatePost from "../../components/CreatePost/CreatePost";
import Filters from "../../components/Filters/Filters";
import { sortPosts } from "../../utils/SortPosts";
import Post from "../../components/Post/Post";

function Home() {
  const { authState } = useContext(AuthContext);
  const { dataState, filter } = useContext(DataContext);

  const loggedInUser = dataState?.users?.find(
    (user) => user.username === authState?.user?.username
  );

  const followingUsers = loggedInUser?.following || [];

  const usernameOfFollowingUsers = [...followingUsers].map(
    (user) => user?.username
  );

  const postsOfFollowingUsers = dataState?.posts.filter((post) =>
    usernameOfFollowingUsers.includes(post.username)
  );

  const postsOfLoggedInUser = dataState?.posts.filter(
    (post) => post.username === loggedInUser.username
  );

  const timelinePosts = [...postsOfFollowingUsers, ...postsOfLoggedInUser];

  const sortedPosts = sortPosts(timelinePosts, filter);

  return (
    <div className="homePageContainer">
      <Sidebar />
      <section className="homeSection">
        <h2>Home</h2>
        <CreatePost />
        <Filters />
        <div className="postsContainer">
          {[...sortedPosts].reverse().map((post, idx) => (
            <Post post={post} key={idx} />
          ))}
        </div>
      </section>
      <ExploreUsers />
    </div>
  );
}

export default Home;
