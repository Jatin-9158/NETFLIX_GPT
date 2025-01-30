import React, { useEffect } from 'react';
import { options, popular_tmdb_url } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addtopRatedMovies } from '../utils/movieSlice';
import { top_rated } from '../utils/constant';
const useTopRatedMovies = () => {
  const dispatch = useDispatch();


  const getusetopRatedMovies = async () => {
    try {
      const data = await fetch(top_rated, options);
      const json = await data.json();

      dispatch(addtopRatedMovies(json.results));
     
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  useEffect(() => {
    getusetopRatedMovies();
  }, []);


 
};

export default useTopRatedMovies;
