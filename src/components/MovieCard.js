import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className="flex-shrink-0 ">
        <img className="w-[200px] h-[220px] rounded-sm "alt="Movie Card" src={IMG_CDN_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard