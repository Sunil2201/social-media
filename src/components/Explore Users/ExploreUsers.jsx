import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import "./ExploreUsers.css";
import { AuthContext } from "../../contexts/AuthContext";
import { followUser } from "../../utils/UserUtils";

function ExploreUsers({ usersToFollow }) {
  const { authState, authDispatch } = useContext(AuthContext);

  return (
    <div className="exploreUsersContainer">
      <div className="searchContainer">
        <BiSearch className="searchIcon" />
        <input type="text" placeholder="Search users" />
      </div>
      <div className="suggestedUsersContainer">
        <h3>Who to follow?</h3>
        <div className="usersToFollow">
          {usersToFollow.length === 0 ? (
            <p>No more suggestions</p>
          ) : (
            usersToFollow.map((user, idx) => {
              return (
                <div className="userCard" key={idx}>
                  <div className="aboutUser">
                    <div className="profileAvatar">SB</div>
                    <div className="infoAboutUserToFollow">
                      <p>{user?.firstName + " " + user?.lastName}</p>
                      <p>@{user?.username}</p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      followUser(user?._id, authState?.token, authDispatch)
                    }
                  >
                    Follow
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default ExploreUsers;
