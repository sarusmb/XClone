import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox.js'
import Tweet from './Tweet'

function Feed() {
  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
       <TweetBox/>
       <Tweet/>
    </div>
            
  )
}

export default Feed