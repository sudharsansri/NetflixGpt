import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const SecondaryContainer = () => {
  const movies = useSelector((state) => state?.newMovies?.nowPlaymovies);
  const popularMovies = useSelector((state) => state?.newMovies?.popularMovies);

  return (
    <div className="bg-black text-white px-6 -mt-10 z-20 relative max-w-screen overflow-x-hidden">
        <div className="pl-16">
          <MovieList title="Now Playing" movies={movies} />
          <MovieList title="Popular Playing" movies={popularMovies} />
       
        </div>
      
    </div>
  );
};
