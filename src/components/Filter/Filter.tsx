import React, { useState, useEffect } from "react";
import { Movie } from "../../types";
import { FilterType } from "./types";
import { filterOptions } from "./consts";

type FilterProps = {
  isDisabled: boolean;
  allMovies: Movie[];
  onFilter: (filteredMovies: Movie[] | undefined) => void;
};

const Filter: React.FC<FilterProps> = ({ allMovies, isDisabled, onFilter }) => {
  const [filterType, setFilterType] = useState<FilterType>("title");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      handleFilter();
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [filterValue]);

  // A real Filter feature would work passing the filter keys (filterValue) to the backend.
  const handleFilter = () => {
    if (filterValue === "") return onFilter(undefined);

    const filteredMovies = allMovies.filter((movie) => {
      if (filterType === "title") {
        return movie.title.toLowerCase().includes(filterValue.toLowerCase());
      } else if (filterType === "genre") {
        return movie.genre.toLowerCase().includes(filterValue.toLowerCase());
      } else if (filterType === "year") {
        return movie.year === filterValue;
      }
      return true;
    });
    onFilter(filteredMovies);
  };

  return (
    <div className="flex flex-col items-end gap-4 md:flex-row">
      <div className="flex flex-col gap-1 md:w-[50%] w-full">
        <label htmlFor="filter-select" className="text-xs">
          Search for
        </label>
        <select
          id="filter-select"
          data-testid="filter-select"
          disabled={isDisabled}
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as FilterType)}
          className="px-4 py-2 text-white border border-gray-700 rounded bg-dark h-11 focus:outline-none focus:border-white"
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <label htmlFor="filter-input" className="sr-only">
        Filter by {filterType}
      </label>
      <input
        id="filter-input"
        data-testid="filter-input"
        type="text"
        disabled={isDisabled}
        placeholder={`Search...`}
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        className="px-4 py-2 text-white border border-gray-700 rounded bg-dark h-11 focus:outline-none focus:border-white"
      />
    </div>
  );
};

export default Filter;
