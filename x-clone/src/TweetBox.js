import React, { useState } from 'react'
import'./TweetBox.css'
import {Avatar, Button } from '@mui/material'
import db from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import uuid from 'react-uuid';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e => {
    e.preventDefault();
    const id = uuid();
    const data = {
      tweetId: id,
      displayName: "Anon User",
      userName: "anonUser123",
      avatar: "",
      verified: true, 
      text: tweetMessage, 
      image: tweetImage,
      likes: 0,
    };
    setDoc(doc(db, "tweets", id), data);

    setTweetMessage("");
    setTweetImage("");
  } 

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar/>
          <input 
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What is happening?!" 
            value={tweetMessage}
            type ="text"
            ></input>

        </div>
        <input 
          className="tweetBox__imageInput" 
          placeholder="Optional: Enter image URL"
          value= {tweetImage}
          onChange= {(e) => setTweetImage(e.target.value)}
          type="text"
          ></input>
        <Button onClick={sendTweet} className="tweetBox__postButton" type="submit">Post</Button>

      </form>
    </div>
  )
}

export default TweetBox