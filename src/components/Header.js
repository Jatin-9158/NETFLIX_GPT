import React from 'react';
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");  
      })
      .catch((error) => {
   
        console.error("Sign out error: ", error);
      });
  };

  return (
    
    <div className="absolute px-1 w-full py-1 bg-gradient-to-b from-black z-10 flex justify-between">
      <img 
        className="w-44" 
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="logo" 
      />
      {console.log(auth.currentUser)}
      { auth?.currentUser && 
        <button 
          onClick={handleSignOut} // Fixed: directly invoking the function
          className="font-bold text-white mx-2 my-4 px-5 bg-red-500 rounded-lg h-14 text-center hover:bg-black"
        >
          Sign Out
        </button>
      }
    </div>
  );
};

export default Header;
