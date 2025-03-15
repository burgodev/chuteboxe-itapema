import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import MoviesGrid from "./MoviesGrid";
import { beforeEach, describe, expect, it, vi, MockedFunction } from "vitest";
import { useIntersectionObserver, useMovies } from "../../hooks";
import { MOCK_MOVIES } from "../../api/mocks";
import { apiMoviesToMovies } from "../../mappers/apiMappers";
import useMoviesGrid from "./hooks/useMoviesGrid";
import { ApiProvider } from "../../context/ApiContext";

vi.mock("../../hooks/useMovies");
vi.mock("./hooks/useMoviesGrid");
vi.mock("../../hooks/useIntersectionObserver");

const mockUseMovies = useMovies as MockedFunction<typeof useMovies>;
const mockUseMoviesGrid = useMoviesGrid as MockedFunction<typeof useMoviesGrid>;
const mockUseIntersectionObserver = useIntersectionObserver as MockedFunction<
  typeof useIntersectionObserver
>;

describe("MoviesGrid", () => {
  const movies = apiMoviesToMovies(MOCK_MOVIES);
  beforeEach(() => {
    mockUseMovies.mockReturnValue({
      movies: movies,
      currentPage: 1,
      totalPages: 1,
      isPaginationActive: false,
      handleMoviesChange: vi.fn(),
      onLoadMoreMovies: vi.fn(),
      isLoadingMore: false,
      handlePageChange: () => void 0,
    });

    mockUseMoviesGrid.mockReturnValue({
      selectedMovie: null,
      handleMovieClick: vi.fn(),
      handleCloseModal: vi.fn(),
    });

    mockUseIntersectionObserver.mockReturnValue({ current: null });
  });

  it("renders MoviesGrid component", () => {
    render(
      <ApiProvider>
        <MoviesGrid />
      </ApiProvider>
    );
    expect(screen.getByTestId("movies-grid")).toBeInTheDocument();
  });

  it("displays movies when loaded", async () => {
    mockUseMovies.mockReturnValue({
      ...mockUseMovies(),
      movies: movies,
    });

    render(
      <ApiProvider>
        <MoviesGrid />
      </ApiProvider>
    );
    await waitFor(() =>
      expect(screen.getByTestId(movies[0].id)).toBeInTheDocument()
    );
    expect(screen.getByTestId(movies[1].id)).toBeInTheDocument();
  });
});
