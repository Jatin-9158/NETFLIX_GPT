import React, { useEffect } from 'react';
import { options, upcoming_url } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import {addupcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcoming = useSelector(store => store.movies.upcomingMovies);
  const getuseUpcomingMovies = async () => {
    try {
      const data = await fetch(upcoming_url, options);
      const json = await data.json();

      dispatch(addupcomingMovies(json.results));
     
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  useEffect(() => {
    !getUpcoming && getuseUpcomingMovies();
  }, []);


 
};

export default useUpcomingMovies;
