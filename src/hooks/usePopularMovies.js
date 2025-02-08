import React, { useEffect } from 'react';
import { options, popular_tmdb_url } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { useSelector } from 'react-redux';
const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = useSelector(store => store.movies.popularMovies);
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
    !getPopularMovies&&getusePopularMovies();
  }, []);


 
};

export default usePopularMovies;
