import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
    return (
      <div className="header">
        <div className="header__left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
            alt=""
          />
        </div>
        <div className="header__middle">
          <SearchIcon />
          <input type="text" placeholder="搜尋郵件" />
          <ArrowDropDownIcon className="header__inputCaret" />
        </div>
        <div className="header__right">
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar />
        </div>
      </div>
    );
}

export default Header
