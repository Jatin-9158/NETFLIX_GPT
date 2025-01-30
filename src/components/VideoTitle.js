import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[14%] px-12 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-5  text-pretty text-lg w-1/4">{overview}</p>
      
      <div className=" py-6 flex gap-10">
        <button className="bg-red-600 text-white p-4 px-10 text-xl rounded-lg hover:bg-red-700 transition">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg hover:bg-gray-600 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
