import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Filter from "./Filter";
import { MOCK_MOVIES } from "../../api/mocks";
import { apiMoviesToMovies } from "../../mappers/apiMappers";

describe("Filter", () => {
  it("renders Filter component", () => {
    render(
      <Filter
        isDisabled={false}
        allMovies={apiMoviesToMovies(MOCK_MOVIES)}
        onFilter={vi.fn()}
      />
    );
    expect(screen.getByTestId("filter-input")).toBeInTheDocument();
  });

  it("disables input and select when isDisabled is true", () => {
    render(
      <Filter
        isDisabled={true}
        allMovies={apiMoviesToMovies(MOCK_MOVIES)}
        onFilter={vi.fn()}
      />
    );
    expect(screen.getByTestId("filter-input")).toBeDisabled();
    expect(screen.getByTestId("filter-select")).toBeDisabled();
  });
});
