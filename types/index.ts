export type Character = {
  id: string;
  name: string;
  species: string;
  status: string;
  episode: string[];
  image: string;
  gender: string;
};

export type Episode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
};
