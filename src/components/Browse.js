import React, { use } from "react";
import { Header } from "./Header";
import { API_OPTIONS } from "../utlis/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addMovies} from "../utlis/moviesSlice"
import { MainContainter } from "./MainContainter";
import { SecondaryContainer } from "./SecondaryContainer";

export const Browse = () => {
    const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en",
      API_OPTIONS
    );
    const movies = await data.json();
    dispatch(addMovies(movies.results));
    console.log(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Header />
      <MainContainter />
      <SecondaryContainer/>
    </div>
  );
};
