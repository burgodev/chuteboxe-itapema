import { useState } from "react";
import { Movie } from "../../../types";

const useMoviesGrid = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieClick = (movie: Movie) => {
    window.open(movie.link, "_blank");

    // setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return {
    selectedMovie,
    handleMovieClick,
    handleCloseModal,
  };
};

export default useMoviesGrid;
