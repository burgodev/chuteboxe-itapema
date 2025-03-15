import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Sorter from "./Sorter";
import { MOCK_MOVIES } from "../../api/mocks";
import { apiMoviesToMovies } from "../../mappers/apiMappers";

describe("Sorter", () => {
  const movies = apiMoviesToMovies(MOCK_MOVIES);
  it("renders Sorter component", () => {
    render(<Sorter isDisabled={false} allMovies={movies} onSort={vi.fn()} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("sorts movies by title", () => {
    const handleSort = vi.fn();
    render(
      <Sorter isDisabled={false} allMovies={movies} onSort={handleSort} />
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "title" },
    });

    const sortedMovies = [...movies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    expect(handleSort).toHaveBeenCalledWith(sortedMovies);
  });

  it("sorts movies by genre", () => {
    const handleSort = vi.fn();
    render(
      <Sorter isDisabled={false} allMovies={movies} onSort={handleSort} />
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "genre" },
    });

    const sortedMovies = [...movies].sort((a, b) =>
      a.genre.localeCompare(b.genre)
    );
    expect(handleSort).toHaveBeenCalledWith(sortedMovies);
  });

  it("sorts movies by year", () => {
    const handleSort = vi.fn();
    render(
      <Sorter isDisabled={false} allMovies={movies} onSort={handleSort} />
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "year" },
    });

    const sortedMovies = [...movies].sort((a, b) =>
      a.year.localeCompare(b.year)
    );
    expect(handleSort).toHaveBeenCalledWith(sortedMovies);
  });

  it("disables select when isDisabled is true", () => {
    render(<Sorter isDisabled={true} allMovies={movies} onSort={vi.fn()} />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
