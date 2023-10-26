import React from 'react'
import './MenuColumn.css'
import MenuColumnOption from './MenuColumnOption';
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';


function MenuColumn() {
  return (
    <div className="menucolumn">
        <ClearIcon className="menucolumn__XIcon"/>
        <MenuColumnOption active Icon= {HomeIcon} text="Home" />
        <MenuColumnOption Icon= {SearchIcon} text="Explore" />
        <MenuColumnOption Icon= {NotificationsNoneIcon} text="Notifications" />
        <MenuColumnOption Icon={MailOutlineIcon} text="Messages" />
        <MenuColumnOption Icon= {ListAltIcon} text="Lists" />
        <MenuColumnOption Icon= {BookmarkBorderIcon} text="Bookmarks" />
        <MenuColumnOption Icon= {PeopleOutlineIcon} text="Communities" />
        <MenuColumnOption Icon= {ClearIcon} text="Premium" />
        <MenuColumnOption Icon= {PersonOutlineIcon} text="Profile" />
        <MenuColumnOption Icon= {MoreHorizIcon} text="More" />
        <Button variant="outlined" className="menucolumn__postButton" fullWidth>Post</Button>


        
        {/* Post Button */}

    </div>
  )
}

export default MenuColumn