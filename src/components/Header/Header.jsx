import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
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
    </div>
  );
}

export default Header;
