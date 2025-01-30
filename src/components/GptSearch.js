import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { Netflix_Bg_Url } from '../utils/constant'
const GptSearch = () => {
  return (
    <div className="">
         <div className="absolute -z-10">
        <img
          src={Netflix_Bg_Url}
          alt="logo"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
