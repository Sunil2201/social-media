import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsBookmarksFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import "./Sidebar.css";

function Sidebar({openModal}) {
  const sidebarSections = [
    { name: "Home", icon: <AiFillHome /> },
    { name: "Explore", icon: <MdExplore /> },
    { name: "Bookmarks", icon: <BsBookmarksFill /> },
    { name: "Logout", icon: <BiLogOut /> },
  ];

  return (
    <div className="sidebarContainer">
      <h2>TripTrails</h2>
      {sidebarSections.map((section, idx) => {
        return (
          <div className="individualSection" key={idx}>
            {section.icon}
            {section.name}
          </div>
        );
      })}
      <button className="newPostBtn" onClick={openModal}>
        New Post
      </button>
    </div>
  );
}

export default Sidebar;
