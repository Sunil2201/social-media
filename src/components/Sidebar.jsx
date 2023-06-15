import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsBookmarksFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import "./Sidebar/Sidebar.css"

function Sidebar() {
  const sidebarSections = [
    { name: "Home", icon: <AiFillHome /> },
    { name: "Explore", icon: <MdExplore /> },
    { name: "Bookmarks", icon: <BsBookmarksFill /> },
    { name: "Logout", icon: <BiLogOut /> },
  ];

  return (
    <div className="sidebarContainer">
      {sidebarSections.map((section, idx) => {
        return (
          <div className="individualSection" key={idx}>
            {section.icon}
            {section.name}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
