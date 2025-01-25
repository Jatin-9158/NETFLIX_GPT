import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { Route,Routes } from 'react-router-dom';
import SignUp from './SignUp'
const Body = () => {
  
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/browse" element={<Browse />} />
    <Route path="/signup" element={<SignUp />} />
    </Routes>
  ) 
}
export default Body;