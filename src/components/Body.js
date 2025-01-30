import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { Route,Routes, useNavigate } from 'react-router-dom';
import SignUp from './SignUp'
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import {auth} from "../utils/firebase"
const Body = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  useEffect(()=>{
    const unsubcribe=onAuthStateChanged(auth,(user)=>{
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
      }
      else
      {
        dispatch(removeUser());
        navigate("/");
      }
    })

  
    return() => unsubcribe();
  },[])
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/browse" element={<Browse />} />
    <Route path="/signup" element={<SignUp />} />
    </Routes>
  ) 
}
export default Body;