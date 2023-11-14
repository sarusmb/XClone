import React, { useEffect, useState } from 'react'
import './PersonalFeed.css'
import UserBox from './UserBox.js'
import Tweet from './Tweet'
import db from './firebase'
import { collection, onSnapshot, orderBy, query, doc, getDoc, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function PersonalFeed() {
  const [tweets, setTweets] = useState([]);


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      // get the user document
      const userRef = doc(db, "users", uid);
      getDoc(userRef).then((doc) => {
        setFirstName(doc.data().firstName);
        setLastName(doc.data().lastName);
        setUserName(doc.data().userName);
        setProfilePicture(doc.data().profilePicture);
      })
    } 
  });

  useEffect(() => {
    onSnapshot(query((collection(db, "tweets")), orderBy("timeStamp","desc"), where("userName","==", userName)), (snapshot) => {
        setTweets(snapshot.docs.map((doc) => doc.data()));
    })
  }, [tweets])

  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>@{userName}</h2>
        </div>
        <UserBox 
        firstName = {firstName}
        lastName = {lastName}
        profilePicture = {profilePicture}
        userName={userName} />
          
       {tweets.map((tweet) => 
       (
        <Tweet 
        displayName={ tweet.displayName }
        userName={ tweet.userName }
        avatar= { tweet.avatar }
        verified= { tweet.verified}  
        text= { tweet.text }  
        image={ tweet.image }
        likes={tweet.likes}
        tweetId={tweet.tweetId}
        />
       ))}
       
    </div>     
  );
}

export default PersonalFeed