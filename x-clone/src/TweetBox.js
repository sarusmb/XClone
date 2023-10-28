import React from 'react'
import'./TweetBox.css'
import {Avatar, Button } from '@mui/material'

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar/>
          <input placeholder="What is happening?!"></input>
          {/* <input placeholder="Enter image URL"></input> */}


        </div>
        <Button className="tweetBox__postButton">Post</Button>

      </form>
    </div>
  )
}

export default TweetBox