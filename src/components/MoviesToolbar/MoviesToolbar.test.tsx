import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import MoviesToolbar from "./MoviesToolbar";

describe("MoviesToolbar", () => {
  it("renders MoviesToolbar component", () => {
    render(
      <MoviesToolbar
        isDisabled={false}
        allMovies={[]}
        handleMoviesChange={vi.fn()}
      />
    );
    expect(screen.getByTestId("movies-toolbar")).toBeInTheDocument();
  });
});
