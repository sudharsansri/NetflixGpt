import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { VideoTitle } from './VideoTitle';
import { VideoBg } from './VideoBg';

export const MainContainter = () => {
  const movies = useSelector((state) => state?.newMovies?.nowPlaymovies);
  const mainMovie = movies?.[1];
  const { id, original_title, overview } = mainMovie || {};

  return (
    <div className="relative h-[90vh]">
      <VideoBg movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

