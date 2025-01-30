import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
 
  if(movies.length==0)return;
  return (
   <div className='bg-black'>
    <div className="-mt-72 relative z-20 ">
       <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
   </div>
   </div>
  )
}

export default SecondaryContainer