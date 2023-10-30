import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox.js'
import Tweet from './Tweet'
import db from './firebase'
import { collection, onSnapshot } from 'firebase/firestore';


function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db,'tweets'), snapshot => {
      setTweets(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        <TweetBox/>
          
       {tweets.map(tweet => (
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

export default Feed