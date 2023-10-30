import React from 'react'
import './UserBadge.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function UserBadge() {
  return (
    <div className='userBadge'>
        <Avatar/>
        <div className="userBadge__user">
            <h3>Joe Smith</h3>
            {" "} 
            <span> @joeSmith </span>
        </div>
    </div>
  )
}

export default UserBadge