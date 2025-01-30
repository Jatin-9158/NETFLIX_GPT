import React from 'react';
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { Logo } from '../utils/constant';
const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");  
      })
      .catch((error) => {
   
        navigate("/error")
      });
  };

  return (
    
    <div className="absolute px-8 w-full py-0 bg-gradient-to-b from-black z-10 flex justify-between">
      <img 
        className="w-44" 
        src= {Logo}
        alt="logo" 
      />
      {console.log(auth.currentUser)}
      { auth?.currentUser && 
        <button 
          onClick={handleSignOut} 
          className="font-bold text-white mx-1 my-4 px-5 bg-red-500 rounded-lg h-14 text-center hover:bg-black"
        >
          Sign Out
        </button>
      }
    </div>
  );
};

export default Header;
