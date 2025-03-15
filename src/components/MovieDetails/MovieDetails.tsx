import React, { memo } from "react";
import { Movie as MovieType } from "../../types";

interface MovieDetailsProps {
  movie: MovieType | null;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="w-full p-6 rounded-lg shadow-lg bg-darkGrey text-lightGrey">
      <h2 className="mb-6 text-3xl font-semibold">
        About <span className="font-bold text-white">{movie.title}</span>
      </h2>

      <p className="flex gap-1 my-1 text-lg text-mediumGrey">
        <span className="font-semibold">Original title:</span>
        <span className="text-white">{movie.originalTitle}</span>
      </p>

      <p className="flex gap-1 my-1 text-lg text-mediumGrey">
        <span className="font-semibold">Type:</span>
        <span className="text-white">{movie.titleType}</span>
      </p>

      <p className="flex gap-1 my-1 text-lg text-mediumGrey">
        <span className="font-semibold">Genres:</span>
        <span className="text-white">{movie.genre}</span>
      </p>

      <p className="flex gap-1 my-1 text-lg text-mediumGrey">
        <span className="font-semibold">Year:</span>
        <span className="text-white">{movie.year}</span>
      </p>
      <p className="flex gap-1 my-1 text-lg text-mediumGrey">
        <span className="font-semibold">Duration:</span>
        <span className="text-white">{movie.runtime} minutes</span>
      </p>
      <p className="flex gap-1 my-1 text-lg text-mediumGrey">
        <span className="font-semibold">Rating:</span>
        <span className="text-white">{movie.rating}/10</span>
      </p>

      {movie.isAdult && (
        <div className="flex items-center mt-4">
          <div className="px-2 py-1 mr-3 text-sm font-bold text-white rounded bg-dark">
            18+
          </div>
          <span className="font-medium text-white">
            Not recommended for people under 18
          </span>
        </div>
      )}
    </div>
  );
};

export default memo(MovieDetails);
