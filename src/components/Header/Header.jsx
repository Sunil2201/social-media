import React, { useContext } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { DataContext } from "../../contexts/DataContext";

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DataContext);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="appName" onClick={navigateToHome}>
        <img
          src="https://res.cloudinary.com/dp6uypw0c/image/upload/v1691742865/social-media-logo_za5vhq.png"
          alt="app-logo"
        />
      </div>
      <div onClick={toggleDarkMode} className="modeToggleSwitch">
        {darkMode ? (
          <MdOutlineLightMode size={20} />
        ) : (
          <MdOutlineDarkMode size={20} />
        )}
      </div>
    </div>
  );
}

export default Header;
