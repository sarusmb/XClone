import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox.js'
import Tweet from './Tweet'
import db from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite';


function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getDocs(collection(db,'tweets')).then((snapshot) => (
      setTweets(snapshot.docs.map(doc => doc.data()))
    ))
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
        />
       ))}
       
    </div>     
  );
}

export default Feed