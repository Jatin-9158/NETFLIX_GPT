import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendSignInLinkToEmail} from 'firebase/auth';
import { auth } from '../utils/firebase'; 
import { setDoc,doc } from "firebase/firestore";
import { db } from "../utils/firebase";
const SignUp = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  
  const actionCodeSettings = {
    url: 'https://netflix-gpt-two-green.vercel.app/', 
    handleCodeInApp: true,
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
 
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; 

      alert('Sign Up Successful');

   

      const userDocRef = doc(db, "users", user.uid); 

     
      await setDoc(userDocRef, {
        name: name,
        mobile: mobile,
        email: email,
      });
      
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email); 

      alert('Check your email for the sign-in link!');
      navigate('/');

    } catch (error) {
      console.error('Error signing up:', error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={handleSignUp}
        className="absolute bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-1/3 p-12 text-white opacity-90 rounded-md"
      >
        <h1 className="text-3xl font-bold mx-2 my-4">Sign Up</h1>
        <input
          className="p-2 mx-2 my-2 rounded-sm bg-gray-800 bg-opacity-70"
          type="text"
          placeholder="Enter the Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-2 mx-2 my-2 rounded-sm bg-gray-800 bg-opacity-70"
          type="text"
          placeholder="Enter the Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          className="p-2 mx-2 my-2 rounded-sm bg-gray-800 bg-opacity-70"
          type="email"
          placeholder="Enter the Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 mx-2 my-2 rounded-sm bg-gray-800 bg-opacity-70"
          type="password"
          placeholder="Enter the Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="p-2 mx-2 my-2 rounded-sm bg-gray-800 bg-opacity-70"
          type="password"
          placeholder="Confirm the Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="font-semibold p-2 mx-2 my-2 bg-red-600 rounded-md">
          Sign Up
        </button>
        <h2 className="mx-2 my-2">
          Already Registered User?{' '}
          <span
            className="font-bold hover:underline cursor-pointer"
            onClick={() => navigate('/')}
          >
            Sign In
          </span>
        </h2>
      </form>
    </div>
  );
};

export default SignUp;