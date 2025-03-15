export type Movie = {
  id: string;
  titleType?: string;
  title: string;
  description: string;
  originalTitle: string;
  isAdult?: boolean;
  year: string;
  runtime?: string;
  genre: string;
  image?: string;
  rating?: number;
  link: string;
  duration: string;
};

export type Principal = {
  id: number;
  category: string;
  job: string | null;
  characters: string[];
  movieId: string;
  nameId: string;
};

export type Name = {
  id: string;
  name: string;
  birthYear: string;
  deathYear: string | null;
  primaryProfessions: string;
  knownForTitles: string;
};
