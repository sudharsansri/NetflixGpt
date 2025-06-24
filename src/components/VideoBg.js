import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utlis/constants";

export const VideoBg = ({ movieId }) => {
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    if (!movieId) return;

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

    getMovies();
  }, [movieId]);

  if (!trailer) return null;

  return (
    <div className="absolute w-screen top-0 left-0  h-full -z-10 overflow-hidden">
      <iframe
        className="w-screen aspect-video h-full object-cover"
        src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailer}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
    </div>
  );
};
