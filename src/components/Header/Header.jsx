import React from "react";
import { BiSearch } from "react-icons/bi";
import {FaHashtag} from "react-icons/fa"
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="appName">
        <FaHashtag size={22}/>
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
