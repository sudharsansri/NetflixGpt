import React from 'react'
import { MovieCard } from './MovieCard'


export const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide w-full movie-scroll">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

