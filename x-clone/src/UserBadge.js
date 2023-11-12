import React, { useState } from 'react'
import './UserBadge.css'
import { Avatar } from '@mui/material'
import db from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function UserBadge() {
  const [userInfo, setUserInfo] = useState({});
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const uid = user.uid;
      // get the user document
      const userRef = doc(db, "users", uid);
      getDoc(userRef).then((doc) => {
        setUserInfo(doc.data());
      })
    } 
  });

  return (
    <div className='userBadge'>
        <Avatar src={userInfo.profilePicture}/>
        <div className="userBadge__user">
            <h3>{userInfo.firstName} {userInfo.lastName}</h3>
            <span>@{userInfo.userName}</span>
        </div>
    </div>
  )
}

export default UserBadge