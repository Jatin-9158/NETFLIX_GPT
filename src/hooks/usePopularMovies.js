import React, { useEffect } from 'react';
import { options, popular_tmdb_url } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();


  const getusePopularMovies = async () => {
    try {
      const data = await fetch(popular_tmdb_url, options);
      const json = await data.json();

      dispatch(addPopularMovies(json.results));
     
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  useEffect(() => {
    getusePopularMovies();
  }, []);


 
};

export default usePopularMovies;
