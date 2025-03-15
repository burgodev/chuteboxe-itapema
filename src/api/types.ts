export type ApiMovie = {
  tconst: string;
  title_type: string;
  title: string;
  original_title: string;
  is_adult: boolean;
  year: string;
  end_year: null;
  runtime: string;
  genre: string;
};

export type ApiPrincipal = {
  id: number;
  category: string;
  job: string | null;
  characters: string[];
  tconst: string;
  nconst: string;
};

export type ApiName = {
  nconst: string;
  name: string;
  birth_year: string;
  death_year: string | null;
  primary_professions: string;
  known_for_titles: string;
};
