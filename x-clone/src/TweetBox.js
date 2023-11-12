import React, { useState } from 'react'
import'./TweetBox.css'
import {Avatar, Button } from '@mui/material'
import db from './firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import uuid from 'react-uuid';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [userInfo, setUserInfo] = useState({});
 
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const uid = user.uid;
      // get the user document
      const userRef = doc(db, "users", uid);
      getDoc(userRef).then((doc) => {
        setUserInfo(doc.data());
        setProfilePicture(doc.data().profilePicture); 
      })
    } 
  });

  const sendTweet = e => {
    e.preventDefault();
    const id = uuid();
    const data = {
      tweetId: id,
      displayName: userInfo.firstName + " " + userInfo.lastName,
      userName: userInfo.userName,
      avatar: profilePicture,
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
          <Avatar src={profilePicture}/>
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