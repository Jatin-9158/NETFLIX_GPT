import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) return null;

    return (
        <div className="pl-11 py-3 overflow-hidden ">
            <h1 className="text-2xl font-bold m-2 text-white ">{title}</h1>
            <div className="flex gap-4 whitespace-nowrap animate-scroll-left scroll-smooth">
                {movies.map((movie) => (
                    <div key={movie.id} className="flex-shrink-0">
                        <MovieCard posterPath={movie.backdrop_path} />
                    </div>
                ))}
            
                
            </div>
        </div>
    );
};

export default MovieList;
