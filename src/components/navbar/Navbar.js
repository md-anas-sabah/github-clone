import React from "react";
import "./Navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <GitHubIcon sx={{ color: "white", height: 32, width: 32 }} />
        <div className="navbar__left__input">
          <input type="text" placeholder="Search or Jump to..." />
        </div>
        <ul>
          <li>
            <a href="./">
              <h4>Pull request</h4>
            </a>
          </li>
          <li>
            <a href="./">
              <h4>Issues</h4>
            </a>
          </li>
          <li>
            <a href="./">
              <h4>Marketplace</h4>
            </a>
          </li>
          <li>
            <a href="./">
              <h4>Explore</h4>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        <NotificationsNoneOutlinedIcon sx={{ color: "white" }} />
        <AddIcon sx={{ color: "white" }} />
        <Avatar src="./assets/display.jpg" sx={{ height: 25, width: 25 }} />
      </div>
    </div>
  );
}

export default Navbar;
