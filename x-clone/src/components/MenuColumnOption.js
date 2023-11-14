import React from 'react';
import './css/MenuColumnOption.css';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function MenuColumnOption({ active, text, Icon, logoutEvent, profileEvent, homeEvent}) {
  const navigate = useNavigate();
    const navigateProfile = (event) => {
      navigate("/profilePage");
    }
    const navigateHome = (event) => {
      navigate("/homePage");
    }
    const logOut = (event) => {
      const auth = getAuth();
      
      signOut(auth).then(() => {
        navigate("/signIn");
        // Sign-out successful.
      }).catch((error) => {
        console.log(error)
         // An error happened.
  });
    }
  return (
    <div 
    onClick={(logoutEvent && logOut) || (profileEvent && navigateProfile) || (homeEvent && navigateHome)} 
    className={`menuColumnOption ${active && 'menuColumnOption--active'}`}>
      <Icon/>
      <div> {text}</div>
    </div>
  )
}

export default MenuColumnOption