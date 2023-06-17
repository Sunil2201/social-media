import React from "react";
import { BiSearch } from "react-icons/bi";
import "./ExploreUsers.css"

function ExploreUsers() {
  return (
    <div className="exploreUsersContainer">
      <div className="searchContainer">
        <BiSearch className="searchIcon" />
        <input type="text" placeholder="Search users" />
      </div>
      <div className="suggestedUsersContainer"></div>
    </div>
  );
}

export default ExploreUsers;
