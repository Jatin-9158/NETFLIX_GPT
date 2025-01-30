

import React, { useEffect, useState } from 'react'
import { options } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideos } from '../utils/movieSlice';
const useMovieTrailer= (movieId) =>{
 const dispatch = useDispatch(); 
 const getMovieVideos = async() =>{
   
    const data = await fetch (`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,options);
    const json = await data.json();
  
    const filterData = json.results.filter((video) => video.type === "Trailer")
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    dispatch(addTrailerVideos(trailer));
 
  };
  useEffect(()=>{
    getMovieVideos();
  },[]);
};  
export default useMovieTrailer;