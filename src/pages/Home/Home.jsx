import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";
import ExploreUsers from "../../components/Explore Users/ExploreUsers";
import { DataContext } from "../../contexts/DataContext";
import CreatePost from "../../components/CreatePost/CreatePost";
import Filters from "../../components/Filters/Filters";

function Home() {
  const { authState } = useContext(AuthContext);
  const { dataState } = useContext(DataContext);

  console.log(dataState?.users, dataState?.posts);

  return (
    <div className="homePageContainer">
      <Sidebar />
      <section className="homeSection">
        <h2>Home</h2>
        <CreatePost />
        <Filters />
      </section>
      <ExploreUsers />
    </div>
  );
}

export default Home;
