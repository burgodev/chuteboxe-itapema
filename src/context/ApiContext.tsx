"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useGetMovies, useGetNames } from "../api/hooks";
import { Movie, Name } from "../types";

type ApiContextType = {
  names: {
    values: Name[];
    isLoading: boolean;
  };
  movies: {
    values: Movie[];
    isLoading: boolean;
    totalPages: number;
  };
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { names, isLoading: isLoadingNames } = useGetNames();
  const { movies, isLoading: isLoadingMovies, totalPages } = useGetMovies();

  return (
    <ApiContext.Provider
      value={{
        names: { values: names, isLoading: isLoadingNames },
        movies: {
          values: movies,
          isLoading: isLoadingMovies,
          totalPages: totalPages,
        },
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApiContext must be used within an AppProvider");
  }
  return context;
};
