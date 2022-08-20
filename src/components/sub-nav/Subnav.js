import React from "react";
import "./Subnav.css";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function Subnav() {
  return (
    <div className="subnav">
      <ul>
        <li>
          <ContactsOutlinedIcon sx={{ color: "gray", height: 20, width: 15 }} />
          <a href="./">Overview</a>
        </li>
        <li>
          <BookOutlinedIcon sx={{ color: "gray", height: 20, width: 15 }} />
          <a href="./">Repositories</a>
        </li>
        <li>
          <ViewQuiltOutlinedIcon
            sx={{ color: "gray", height: 20, width: 15 }}
          />
          <a href="./">Projects</a>
        </li>
        <li>
          <InboxIcon sx={{ color: "gray", height: 20, width: 15 }} />
          <a href="./">Packages</a>
        </li>
        <li>
          <StarOutlineIcon sx={{ color: "gray", height: 20, width: 15 }} />
          <a href="./">Stars</a>
        </li>
      </ul>
    </div>
  );
}

export default Subnav;
