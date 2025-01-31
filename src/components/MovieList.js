import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) return null;

    return (
        <div className="pl-11 py-3 overflow-hidden ">
            <h1 className="text-2xl font-bold mb-5 text-white ">{title}</h1>
            <div className="flex gap-4 whitespace-nowrap animate-scroll-left scroll-smooth">
                {movies.map((movie) => (
                    <div key={movie.id} className="flex-shrink-0">
                   { (movie.poster_path || movie.backdrop_path) ? <MovieCard posterPath={movie.poster_path} title = {movie.title} backdropPath={movie.backdrop_path}/> : null}
                    </div>
                ))}
            
                
            </div>
        </div>
    );
};

export default MovieList;
