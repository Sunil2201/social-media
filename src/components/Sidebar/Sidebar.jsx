import React from "react";
import {
  MdOutlineHome,
  MdOutlineExplore,
  MdOutlineBookmarks,
  MdOutlineLogout,
} from "react-icons/md";
import "./Sidebar.css";

function Sidebar({ openModal }) {
  const sidebarSections = [
    { name: "Home", icon: <MdOutlineHome size={25} /> },
    { name: "Explore", icon: <MdOutlineExplore size={25} /> },
    { name: "Bookmarks", icon: <MdOutlineBookmarks size={25} /> },
    { name: "Logout", icon: <MdOutlineLogout size={25} /> },
  ];

  return (
    <div className="sidebarContainer">
      {sidebarSections.map((section, idx) => {
        return (
          <div className="individualSection" key={idx}>
            {section.icon}
            <span>{section.name}</span>
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
