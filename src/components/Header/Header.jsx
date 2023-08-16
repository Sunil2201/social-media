import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { getAllUsersService } from "../../services/UserServices";
import { users } from "../../backend/db/users";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    searchInput: "",
    filteredUsers: [],
  });
  const navigateToUserProfile = (username) => {
    navigate(`/profile/${username}`);
  };

  useEffect(() => {
    if (data.searchInput) {
      const filtered = users.filter((user) =>
        user.username.toLowerCase().startsWith(data.searchInput.toLowerCase())
      );
      setData((prevData) => ({ ...prevData, filteredUsers: filtered }));
    } else {
      setData((prevData) => ({ ...prevData, filteredUsers: [] }));
    }
  }, [data.searchInput]);

  return (
    <div className="header">
      <div className="appName">
        <img
          src="https://res.cloudinary.com/dp6uypw0c/image/upload/v1691742865/social-media-logo_za5vhq.png"
          alt="app-logo"
        />
      </div>
      <div className="searchContainer">
        <BiSearch className="searchIcon" style={{color: "#000"}}/>
        <input
          type="text"
          placeholder="Search users"
          value={data.searchInput}
          onChange={(e) =>
            setData((prevData) => ({
              ...prevData,
              searchInput: e.target.value,
            }))
          }
        />
        {data.searchInput && (
          <div className="resultsContainer">
            {data.filteredUsers.length > 0 ? (
              data.filteredUsers.map((user) => (
                <div
                  className="resultItem"
                  key={user._id}
                  onClick={() => navigateToUserProfile(user.username)}
                >
                  <img
                    className="userAvatar"
                    src={user.profileAvatar}
                    alt={user.username}
                  />
                  <div className="userInfo">
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                    <p>@{user.username}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="noResults">No search results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
