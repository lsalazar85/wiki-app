import { URL_LOADER_IMG } from "../../constants/urls";

export const mockTestCharacter = {
  id: "1",
  name: "Nick",
  species: "Human",
  status: "Alive",
  episode: ["1", "2", "3"],
  image: URL_LOADER_IMG,
  gender: "Male",
};

export const mockTestEpisode = {
  id: "1",
  name: "Nick",
  species: "Human",
  air_date: "December 10",
  episode: "Episode 1",
  characters: ["Rick"],
};
