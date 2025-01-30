import React from 'react';
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { Logo } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { toogleGptSearchView } from '../utils/gptSlice';
import { lang } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");  
      })
      .catch((error) => {
   
        navigate("/error")
      });
  };
  const handleGptSearch = () =>{
    dispatch(toogleGptSearchView());
  }
  const handleLangChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }
  const GptSearchCheck = useSelector((store)=> store.gpt.showGptSearch)

  return (
    
    <div className="absolute px-6 w-full py-0 bg-gradient-to-b from-black z-10   flex justify-between">
      <img 
        className="w-44" 
        src= {Logo}
        alt="logo" 
      />
      
      
      { auth?.currentUser &&
        <div className='flex gap-5'> 
         {  GptSearchCheck && ( <select className='bg-gray-950 mx-1 my-4 px-3 rounded-md outline-none text-white font-semibold' onChange={handleLangChange}>
           { lang.map((langobj)=>(
                <option key={langobj.identifier} value={langobj.identifier}>{langobj.name}</option>
           ))} 
          </select>
            )
        }
        <button className=" text-white font-bold text-white mx-1 my-4 px-3 bg-violet-700 rounded-lg h-14 text-center" onClick={handleGptSearch}>
          {
            GptSearchCheck ? "GPT Search" : "Home Page"
          }
        </button> 
         <button 
          onClick={handleSignOut} 
          className="font-bold text-white mx-1 my-4 px-3 bg-red-700 rounded-lg  text-center "
        >
          Sign Out
        </button>
        </div>
        
      }
    </div>
  );
};

export default Header;
