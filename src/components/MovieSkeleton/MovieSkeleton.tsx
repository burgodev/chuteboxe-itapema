import React from "react";

const MovieSkeleton: React.FC = () => {
  return (
    <div className="relative overflow-hidden text-white rounded shadow-lg cursor-pointer border border-transparent bg-gray-800 animate-pulse h-[559px]">
      <div className="absolute inset-0 bg-dark"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-75">
        <div className="w-3/4 h-6 mb-2 bg-gray-600 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
};

export default MovieSkeleton;
