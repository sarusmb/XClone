import React from 'react';
import './MenuColumnOption.css';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function MenuColumnOption({active, text, Icon, logoutEvent}) {
  const navigate = useNavigate();
    const logOut = (event) => {
      const auth = getAuth();
      console.log(auth)
      
      signOut(auth).then(() => {
        navigate("/signIn");
        // Sign-out successful.
      }).catch((error) => {
        console.log(error)
         // An error happened.
  });
    }
  return (
    <div onClick={logoutEvent && logOut} className={`menuColumnOption ${active && 'menuColumnOption--active'}`}>
      <Icon/>
      <div> {text}</div>
    </div>
  )
}

export default MenuColumnOption