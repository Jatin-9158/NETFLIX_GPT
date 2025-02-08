import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword,sendPasswordResetEmail, setPersistence,browserLocalPersistence  } from "firebase/auth";
import { Netflix_Bg_Url } from "../utils/constant";
const Login = () => {
        
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe,setRememberMe] = useState(false);
  const handleSignWithEmailandPassword = async() =>{

    signInWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
 
    await setPersistence(auth,browserLocalPersistence)
    navigate("/browse");  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  const handleSignInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      await setPersistence(auth,browserLocalPersistence)
      navigate("/browse");  
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      setError("Failed to sign in with Google. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
  }  
  const handleForgotPassword = () =>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    setError("Password reset email sent! Check your inbox.");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
 
  });
  
    
  };

  return (
    <div>
      <div className="absolute -z-10">
             <img
               src={Netflix_Bg_Url}
               alt="logo"
             />
       </div>

      <form
        onSubmit={handleEmailSignIn}
        className="absolute bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-[440px] py-10 px-12 text-white opacity-80 rounded-md"
      >
        <h1 className="text-3xl font-bold mx-2 my-4">Sign In</h1>
        {error && <p className="text-red-500 text-center font-bold mb-4 break-words">{error}</p>}

        <input
          className="p-4 mx-2 my-2 rounded-sm bg-gray-800 bg-opacity-70"
          type="email"
          placeholder="Enter the Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="p-4 mx-2 my-2 rounded-sm bg-gray-800 bg-opacity-70"
          type="password"
          placeholder="Enter the Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className={`font-semibold p-2 mx-2 my-2 bg-red-600 rounded-md ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleSignWithEmailandPassword}
          disabled={loading}
        >
         Sign In
        </button>

        <h2 className="text-xl font-medium mx-2 my-4 text-center">OR</h2>

        <button
          className="font-semibold p-2 mx-2 my-2 bg-gray-500 opacity-90 rounded-md"
          onClick={handleSignInWithGoogle}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign in with Google"}
        </button>

        <h2 className="text-center mx-2 my-2 hover:underline cursor-pointer" onClick={handleForgotPassword} >Forgot Password ?</h2>

        <div className="mx-2 my-2">
          <input type="checkbox" className="p-5 mr-4" onChange={()=> setRememberMe(!rememberMe)}/>
          <label className="mb-4">Remember Me</label>
        </div>

        <h2 className="mx-2 my-2">
          New to Netflix ?{" "}
          <span
            className="font-bold hover:underline cursor-pointer"
            onClick={() => navigate("/SignUp")}
          >
            Sign up now
          </span>
        </h2>
      </form>
    </div>
  );
};

export default Login;
