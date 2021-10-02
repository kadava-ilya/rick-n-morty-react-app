import { makeGetRequest } from "./common/ApiCaller";

export const getCharacters = async () => {
  return await makeGetRequest("https://rickandmortyapi.com/api/character");
};
