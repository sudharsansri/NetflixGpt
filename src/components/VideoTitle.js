import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-80 px-6 md:px-12 lg:px-20 text-white absolute z-10 top-0 left-0 max-w-3xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
        {title}
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 drop-shadow-md">
        {overview}
      </p>
      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition duration-200">
          ▶ Play
        </button>
        <button className="bg-gray-700 bg-opacity-80 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 transition duration-200">
          + My List
        </button>
      </div>
    </div>
  );
};

