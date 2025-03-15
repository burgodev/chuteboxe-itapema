import React, { useState, useEffect } from "react";
import { Movie } from "../../types";
import { SorterType } from "./types";
import { sorterOptions } from "./consts";

type SorterProps = {
  isDisabled: boolean;
  allMovies: Movie[];
  onSort: (sortedMovies: Movie[]) => void;
};

const Sorter: React.FC<SorterProps> = ({ allMovies, isDisabled, onSort }) => {
  const [sortType, setSortType] = useState<SorterType>("title");

  useEffect(() => {
    handleSort();
  }, [sortType]);

  const handleSort = () => {
    const sortedMovies = [...allMovies].sort((a, b) => {
      if (sortType === "title") {
        return a.title.localeCompare(b.title);
      } else if (a.genre !== null && sortType === "genre") {
        return a.genre.localeCompare(b.genre);
      } else if (a.year !== null && sortType === "year") {
        return a.year.localeCompare(b.year);
      }
      return 0;
    });
    onSort(sortedMovies);
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="sort-select" className="text-xs">
        Sort by
      </label>

      <select
        id="sort-select"
        disabled={isDisabled}
        value={sortType}
        onChange={(e) => setSortType(e.target.value as SorterType)}
        className="px-4 py-2 text-sm text-white border border-gray-700 rounded bg-dark h-11 focus:outline-none focus:border-white"
        aria-label="Sort movies by"
      >
        {sorterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorter;
