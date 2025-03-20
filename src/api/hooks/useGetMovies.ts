"use client";

import { useEffect, useState, useRef, useMemo } from "react";

import { Movie } from "../../types";
import { MOCK_API_LOADING_TIME, PAGINATION_COUNT } from "../consts";
import { apiMoviesToMovies } from "../../mappers/apiMappers";
import axios from "../axios";
import { fetchVimeoAccessToken, getVimeoVideos } from "../vimeoApi";

const useGetMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const hasFetchedMovies = useRef(false);

  // This should come from API
  const totalPages = useMemo(
    () => Math.ceil(movies.length / PAGINATION_COUNT),
    [movies]
  );

  useEffect(() => {
    // Avoid multiple API calls. In a real app this could be cached...
    if (!hasFetchedMovies.current) {
      getMovies();
      hasFetchedMovies.current = true;
    }
  }, []);

  const getMovies = async () => {
    setIsLoading(true);

    try {
      const accessToken = await fetchVimeoAccessToken();

      console.log("accessToken", accessToken);

      const videos = await getVimeoVideos();

      setMovies(videos);
    } catch (err) {
      console.log("Error fetching movies", err);
    }

    // * setTimeout added for demo purposes */
    setTimeout(() => setIsLoading(false), MOCK_API_LOADING_TIME);
  };

  return { movies, isLoading, totalPages };
};

export default useGetMovies;
