import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "./moviesSlice";
import { API_OPTIONS } from "./constants";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en",
        API_OPTIONS
      );
      const movies = await data.json();
      dispatch(addPopularMovies(movies.results));
      console.log(movies);
    };

    getMovies();
  }, [dispatch]);
};