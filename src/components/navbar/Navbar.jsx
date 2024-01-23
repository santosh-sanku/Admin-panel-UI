import React from "react";
import "./navbar.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchSharpIcon className="icons" />
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon className="icons" />
            English
          </div>

          <div className="item">
            <DarkModeIcon className="icons" />
          </div>

          <div className="item">
            <FullscreenExitIcon className="icons" />
          </div>

          <div className="item">
            <NotificationsNoneIcon className="icons" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleIcon className="icons" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ListIcon className="icons" />
          </div>

          <div className="item">
            <img src="" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
