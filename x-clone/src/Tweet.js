import React from 'react'
import './Tweet.css'
import {Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Tweet({
  displayName,
  userName,
  avatar ,
  verified,
  text,
  image,
}) {
  return (
    <div className="tweet">
      <div className="tweet__avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="tweet__body">
        <div className="tweet__header">
          <div className="tweet__headerText">
            <h3>
              {displayName}
              <span className="tweet__headerSpecial">
                {verified && <VerifiedIcon className="tweet__verifiedIcon"/>}
                {"  "}
                @{userName}
                </span>
            </h3>
          </div>
          <div className="tweet__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image}/> 
        <div className="tweet__footer">
          <FavoriteBorderIcon fontSize="small" />
          <ChatBubbleOutlineIcon fontSize="small" />
        </div>
      </div>

    </div>
  )
}

export default Tweet