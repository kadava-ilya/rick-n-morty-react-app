import { makeGetRequest } from "./common/ApiCaller";

export const getLocations = async () => {
  return await makeGetRequest("https://rickandmortyapi.com/api/location");
};
