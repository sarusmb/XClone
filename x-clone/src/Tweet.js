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
  timestamp,
  text,
  image,
}) {
  return (
    <div className="tweet">
      <div className="tweet__avatar">
        <Avatar/>
      </div>
      <div className="tweet__body">
        <div className="tweet__header">
          <div className="tweet__headerText">
            <h3>
              Joe Smith
              <span className="tweet__headerSpecial">
                <VerifiedIcon className="tweet__verifiedIcon"/>
                @JoeSmith
                </span>
            </h3>
          </div>
          <div className="tweet__headerDescription">
            <p> Hello, this is Nyan Cat!</p>
          </div>
        </div>
        <img src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"/> 
        <div className="tweet__footer">
          <FavoriteBorderIcon fontSize="small" />
          <ChatBubbleOutlineIcon fontSize="small" />
        </div>
      </div>
      

      

    
    </div>
  )
}

export default Tweet