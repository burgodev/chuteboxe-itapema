import { MOCK_TMDB_MOVIES } from "../api/mocks";
import { ApiMovie, ApiName, ApiPrincipal } from "../api/types";
import { Movie, Name, Principal } from "../types";
import { VimeoVideo } from "../types/vimeo";

// ** This extra layer is important when FE types doesn't match BE types. Also a good approach when working with features that doesn't have a BE yet. */
export const apiMoviesToMovies = (movies: VimeoVideo[]): Movie[] =>
  movies.map((movie, index) => ({
    id: movie.uri,
    titleType: "movie",
    title: movie.name,
    link: movie.link,
    description: movie.description,
    duration: movie.duration.toString(),
    image: movie.pictures.base_link,
    originalTitle: movie.original_title,
    year: movie.year ?? new Date().getFullYear().toString(), // Set to current year if not provided
    runtime: "1938",
    genre: "unknown",
    rating: Math.floor(Math.random() * 10) + 1, // Bonus: Generate a random rating from 1 to 10
  }));

export const apiNamesToNames = (names: ApiName[]): Name[] =>
  names.map((name, index) => ({
    id: name.nconst,
    name: name.name,
    birthYear: name.birth_year,
    deathYear: name.death_year,
    primaryProfessions: name.primary_professions,
    knownForTitles: name.known_for_titles,
  }));

export const apiPrincipalsToPrincipals = (
  principals: ApiPrincipal[]
): Principal[] =>
  principals.map((principal, index) => ({
    id: principal.id,
    category: principal.category,
    job: principal.job,
    characters: principal.characters,
    movieId: principal.tconst,
    nameId: principal.nconst,
  }));
