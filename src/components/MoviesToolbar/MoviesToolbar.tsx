import { memo } from "react";
import { Filter } from "../Filter";
import { Sorter } from "../Sorter";
import { Movie } from "../../types";

type MoviesToolbarProps = {
  isDisabled: boolean;
  allMovies: Movie[];
  handleMoviesChange: (filteredMovies: Movie[] | undefined) => void;
};

const MoviesToolbar: React.FC<MoviesToolbarProps> = ({
  isDisabled,
  allMovies,
  handleMoviesChange,
}) => {
  return (
    <div
      className="flex flex-col gap-4 p-4 border border-solid rounded bg-dark md:flex-row w-fit animate-slideInFromRightAndFadeIn border-mediumGrey"
      data-testid="movies-toolbar"
    >
      <Sorter
        isDisabled={isDisabled}
        allMovies={allMovies}
        onSort={(filteredMovies) => handleMoviesChange(filteredMovies)}
      />
      <Filter
        isDisabled={isDisabled}
        allMovies={allMovies}
        onFilter={(filteredMovies) => handleMoviesChange(filteredMovies)}
      />
    </div>
  );
};

export default memo(MoviesToolbar);
