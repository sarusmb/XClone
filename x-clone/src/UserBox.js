import React from 'react'
import'./UserBox.css'
import {Avatar, Button } from '@mui/material'


function UserBox({
    firstName,
    lastName,
    userName,
    profilePicture
}) {
  
  return (
    <div className='userBox'>
        <div className="userBox__input">
          <Avatar src={profilePicture} sx={{ width: 130, height: 130 }} />
          <Button  className="userBox__editButton" type="submit">Edit Profile</Button>

        </div>
        <div className="userBox__details">
            <span className='displayName'>{firstName} {lastName} </span>
            <span className='userName'>@{userName}</span>     
        </div>
    </div>
  )
}

export default UserBox