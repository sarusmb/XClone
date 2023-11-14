import React from 'react'
import './MenuColumn.css'
import MenuColumnOption from './MenuColumnOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function MenuColumn() {
  return (
    <div className="menucolumn">
        <Avatar className="menucolumn__XIcon" src="https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp"/>
        <MenuColumnOption Icon= {HomeIcon} text="Home" homeEvent/>
        <MenuColumnOption Icon= {SearchIcon} text="Explore" />
        <MenuColumnOption Icon= {NotificationsNoneIcon} text="Notifications" />
        <MenuColumnOption Icon={MailOutlineIcon} text="Messages" />
        <MenuColumnOption Icon= {ListAltIcon} text="Lists" />
        <MenuColumnOption Icon= {BookmarkBorderIcon} text="Bookmarks" />
        <MenuColumnOption Icon= {PeopleOutlineIcon} text="Communities" />
        <MenuColumnOption Icon= {PersonOutlineIcon} text="Profile" profileEvent />
        <MenuColumnOption Icon= {LogoutIcon} text="Logout" logoutEvent/>
    </div>
  )
}

export default MenuColumn