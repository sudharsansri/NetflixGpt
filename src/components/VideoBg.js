import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utlis/constants";

export const VideoBg = ({ movieId }) => {
  const [trailer, setTrailer] = useState("");

  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const videos = await data.json();
    const filterVideos = videos?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailerKey = filterVideos?.[0]?.key;
    setTrailer(trailerKey);
  };

  useEffect(() => {
    if (!movieId) return;
    getMovies();
  }, [movieId]);

  if (!trailer) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailer}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media; fullscreen"
        frameBorder="0"
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
    </div>
  );
};
