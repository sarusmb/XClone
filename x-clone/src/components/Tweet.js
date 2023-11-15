import { React, useState} from 'react'
import './css/Tweet.css'
import { Avatar, IconButton } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { doc, updateDoc } from "firebase/firestore";
import db from '../firebase';


function Tweet({
  displayName,
  userName,
  avatar ,
  verified,
  text,
  image,
  likes,
  tweetId,
}) {
  const [isLiked, setIsLiked] = useState(false);

  const updateLikeCount = e => {

    const tweetToUpdate = doc(db, "tweets", tweetId);
    if (!isLiked ) {
      updateDoc(tweetToUpdate, {
        likes: likes + 1
      })
      setIsLiked(true); 
    } else {
      updateDoc(tweetToUpdate, {
        likes: likes - 1
      })
      setIsLiked(false)
    }
  }
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
       {image && <img className="imageInput" src={image}/> }
        <div className="tweet__footer">
          <IconButton onClick={updateLikeCount} className="favoriteButton">
            {!isLiked && <FavoriteBorderIcon />}
            {isLiked && <FavoriteIcon className='favoriteButton_heartFill'/>}
            {likes}
          </IconButton>
        </div>
      </div>

    </div>
  )
}

export default Tweet