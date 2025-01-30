import React from "react";
import { useState } from "react";
const VideoTitle = ({ title, overview }) => {
  const [isExpanded,setIsExpanded] = useState(false);
  return (
    <div className="w-screen aspect-video pt-[14%] px-12 mb-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className={`py-6 text-pretty text-lg max-w-lg  ${ isExpanded ? "" : "line-clamp-2" }`}>{overview}</p>
      
      {
        !isExpanded && 
         <button className="text-blue-400 py-3 " onClick={()=>setIsExpanded(!isExpanded)}>
           .... Read More
         </button>

      }
      <div className="py-6 flex gap-6">
        <button className="bg-red-600 text-white p-4 px-10  text-xl rounded-lg hover:bg-red-700 transition">
        <span className="font-bold">&#9656;</span> Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg hover:bg-gray-600 transition">
         <span className="font-bold">i</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
