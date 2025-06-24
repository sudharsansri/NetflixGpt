import React, { use } from "react";
import { Header } from "./Header";
import { API_OPTIONS } from "../utlis/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addMovies} from "../utlis/moviesSlice"
import { MainContainter } from "./MainContainter";
import { SecondaryContainer } from "./SecondaryContainer";
import { usePopularMovies } from "../utlis/popularMovie";

export const Browse = () => {
    const dispatch = useDispatch();
    usePopularMovies();
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
    <div className="max-w-screen overflow-x-hidden">
      <Header />
      <MainContainter />
      <SecondaryContainer/>
    </div>
  );
};
