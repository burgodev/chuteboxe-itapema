import { useState, useEffect } from "react";
import { Movie } from "../types";
import usePagination from "./usePagination";
import { MOCK_API_LOADING_TIME, PAGINATION_COUNT } from "../api/consts";
import { useApiContext } from "../context/ApiContext";

const useMovies = () => {
  const {
    movies: { values: allMovies, isLoading, totalPages },
  } = useApiContext();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isPaginationActive, setIsPaginationActive] = useState(true);
  const { currentPage, handlePageChange, paginate } =
    usePagination(PAGINATION_COUNT);

  useEffect(() => {
    if (!isLoading) {
      setMovies(allMovies.slice(0, currentPage * PAGINATION_COUNT));
    }
  }, [allMovies, isLoading, currentPage]);

  const handleMoviesChange = (currentMovies: Movie[] | undefined) => {
    currentMovies === undefined
      ? setIsPaginationActive(true)
      : setIsPaginationActive(false);

    setMovies(
      currentMovies ?? allMovies.slice(0, currentPage * PAGINATION_COUNT)
    );
  };

  const onLoadMoreMovies = () => {
    if (currentPage < totalPages) {
      setIsLoadingMore(true);

      // * setTimeout added for demo purposes */
      setTimeout(() => {
        handlePageChange(currentPage + 1);
        setMovies((prevMovies) => [
          ...prevMovies,
          ...allMovies.slice(
            currentPage * PAGINATION_COUNT,
            (currentPage + 1) * PAGINATION_COUNT
          ),
        ]);
        setIsLoadingMore(false);
      }, MOCK_API_LOADING_TIME);
    }
  };

  return {
    movies,
    currentPage,
    totalPages,
    isLoadingMore,
    isPaginationActive,
    handleMoviesChange,
    handlePageChange,
    onLoadMoreMovies,
  };
};

export default useMovies;
