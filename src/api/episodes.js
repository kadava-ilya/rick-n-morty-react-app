import { makeGetRequest } from "./common/ApiCaller";

export const getEpisodes = async () => {
  return await makeGetRequest("https://rickandmortyapi.com/api/episode");
};
