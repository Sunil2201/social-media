import React from "react";
import { BiSearch } from "react-icons/bi";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="appName">
        <img
          src="https://res.cloudinary.com/dp6uypw0c/image/upload/v1691742865/social-media-logo_za5vhq.png"
          alt="app-logo"
        />
        <h3>TrendWhirl</h3>
      </div>
      <div className="searchContainer">
        <BiSearch className="searchIcon" />
        <input type="text" placeholder="Search users" />
      </div>
    </div>
  );
}

export default Header;
