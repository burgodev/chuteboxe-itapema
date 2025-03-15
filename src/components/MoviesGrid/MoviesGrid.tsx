import { Suspense, lazy, memo } from "react";
import MovieSkeleton from "../MovieSkeleton/MovieSkeleton";
import { useMovies } from "../../hooks";
import { MoviesToolbar } from "../MoviesToolbar";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useMoviesGrid from "./hooks/useMoviesGrid";
import { useApiContext } from "../../context/ApiContext";

const Movie = lazy(() => import("../Movie/Movie"));
const MovieModal = lazy(() => import("../MovieModal/MovieModal"));

const MoviesGrid = () => {
  const {
    movies: { values: allMovies, isLoading },
  } = useApiContext();

  const {
    movies,
    currentPage,
    totalPages,
    isPaginationActive,
    isLoadingMore,
    handleMoviesChange,
    onLoadMoreMovies,
  } = useMovies();

  const { selectedMovie, handleMovieClick, handleCloseModal } = useMoviesGrid();

  const lastMovieElementRef = useIntersectionObserver(() => {
    if (
      !isLoading &&
      !isLoadingMore &&
      isPaginationActive &&
      currentPage < totalPages
    ) {
      onLoadMoreMovies();
    }
  });

  return (
    <div className="flex flex-col gap-12" data-testid="movies-grid">
      <h1 className="hidden"> Free Movies </h1>
      <div className="flex justify-end">
        <MoviesToolbar
          isDisabled={isLoading}
          allMovies={allMovies}
          handleMoviesChange={(filteredMovies) => {
            handleMoviesChange(filteredMovies);
          }}
        />
      </div>

      <div className="relative full-width animate-slideInFromLeftAndFadeIn">
        {!movies.length ? (
          <div className="flex items-center justify-center w-full h-[55vh]">
            <strong>{"NO RESULTS :("}</strong>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-12 gap-y-32 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-6">
            {isLoading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <MovieSkeleton key={index} />
                ))
              : movies.map((movie, index) => {
                  if (movies.length === index + 1) {
                    return (
                      <div ref={lastMovieElementRef} key={index}>
                        <Suspense fallback={<MovieSkeleton />}>
                          <Movie
                            onClick={() => handleMovieClick(movie)}
                            movie={movie}
                          />
                        </Suspense>
                      </div>
                    );
                  } else {
                    return (
                      <Suspense fallback={<MovieSkeleton />} key={index}>
                        <div data-testid={movie.id}>
                          <Movie
                            onClick={() => handleMovieClick(movie)}
                            movie={movie}
                          />
                        </div>
                      </Suspense>
                    );
                  }
                })}
            {isLoadingMore &&
              Array.from({ length: 2 }).map((_, index) => (
                <MovieSkeleton key={`loading-more-${index}`} />
              ))}
          </div>
        )}

        {selectedMovie && (
          <MovieModal
            isOpen={!!selectedMovie}
            onClose={handleCloseModal}
            movie={selectedMovie}
          />
        )}
      </div>
    </div>
  );
};

export default memo(MoviesGrid);
