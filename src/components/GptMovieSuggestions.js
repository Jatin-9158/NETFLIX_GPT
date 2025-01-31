import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
const GptMovieSuggestions = () => {
  const {movieResults,movieNames} = useSelector((store)=>store.gpt);
  if(!movieNames) return null;
  {console.log(movieNames)}
  {console.log(movieResults)}
  return (
    <div className='bg-black mt-5 p-4'>
      <div>
        {movieNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={movieResults[index].results} />)}
      </div>
    </div>
  )
}

export default GptMovieSuggestions