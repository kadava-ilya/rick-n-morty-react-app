import { makeGetRequest } from "./common/ApiCaller";
import { CHARACTERS_API } from "./api";

export const getCharacters = async (data) => {
  return await makeGetRequest(CHARACTERS_API + data);
};
