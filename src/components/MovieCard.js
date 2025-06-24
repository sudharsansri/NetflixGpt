import React from "react";
import { IMAGE_BASE_URL } from "../utlis/constants";

export const MovieCard = ({ poster_path }) => {
  return (
    <div className="min-w-[160px] md:min-w-[200px] h-[240px] md:h-[300px] rounded-md overflow-hidden transform transition-transform duration-600 hover:scale-105 cursor-pointer">
      <img
        src={IMAGE_BASE_URL + poster_path}
        alt="Movie Poster"
        className="w-full h-full object-cover"
      />
    </div>
  );
};