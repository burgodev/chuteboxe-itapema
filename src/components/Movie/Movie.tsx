import { memo } from "react";
import { Movie as MovieType } from "../../types";

type MovieProps = {
  onClick: () => void;
  movie: MovieType;
};

const Movie: React.FC<MovieProps> = ({ onClick, movie }) => {
  const { title, genre, image, year, rating } = movie;

  return (
    <div
      className="overflow-hidden text-white transition-transform transform border border-transparent shadow-lg cursor-pointer hover:border-white animate-fadeIn group rounded-[8px]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
      aria-label={`View details for ${title}`}
    >
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-12 text-center transition-opacity bg-black bg-opacity-35 group-hover:bg-opacity-75">
        <h5 className="text-lg opacity-75 md:text-3xl group-hover:opacity-100">
          {title}
        </h5>
        <div className="opacity-0 group-hover:opacity-100">
          <p className="text-xs font-bold text-gray-400 md:text-lg ">{genre}</p>
          <p className="text-xs font-bold text-gray-400 md:text-lg">({year})</p>
        </div>
      </div>
      <img
        className="object-cover w-full h-[45vh] transition-transform transform group-hover:scale-110"
        src={image}
        alt={`Poster of ${title}`}
        loading="lazy"
      />
    </div>
  );
};

export default memo(Movie);
