import React, { useEffect } from 'react';
import { options, tmdb_url } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();


  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(tmdb_url, options);
      const json = await data.json();
     
      dispatch(addNowPlayingMovies(json.results));
     
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);


 
};

export default useNowPlayingMovies;
