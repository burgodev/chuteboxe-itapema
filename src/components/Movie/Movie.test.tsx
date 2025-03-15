import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Movie from "./Movie";
import { MOCK_MOVIES } from "../../api/mocks";
import { apiMoviesToMovies } from "../../mappers/apiMappers";

describe("Movie", () => {
  const movieProps = {
    movie: apiMoviesToMovies(MOCK_MOVIES)[0],
    onClick: vi.fn(),
  };

  const { title, genre } = movieProps.movie;

  it("renders Movie component", () => {
    render(<Movie movie={movieProps.movie} onClick={movieProps.onClick} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(genre)).toBeInTheDocument();
  });

  it("calls onClick when movie is clicked", () => {
    render(<Movie movie={movieProps.movie} onClick={movieProps.onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(movieProps.onClick).toHaveBeenCalled();
  });
});
