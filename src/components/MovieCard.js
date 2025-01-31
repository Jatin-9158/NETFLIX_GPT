import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath,title,backdropPath}) => {
  return (
    <div className="flex-shrink-0 bg-gradient-to-b bg-slate-900 gap-3 pb-4 rounded-xl text-center w-[200px]">
    { (posterPath!=null) ? <img className="w-[200px] h-[220px] rounded-sm" alt="Movie Card" src={IMG_CDN_URL + posterPath} /> :
     <img className="w-[200px] h-[220px] rounded-sm" alt="Movie Card" src={IMG_CDN_URL +backdropPath} />    }
    <h2 className="text-white font-semibold mt-2 w-full truncate">
        {title}
    </h2>
</div>

  )
}

export default MovieCard