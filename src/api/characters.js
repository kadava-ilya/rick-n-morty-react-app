import { makeGetRequest } from "./common/ApiCaller";
import { CHARACTERS_API } from "./api";

export const getCharacters = async () => {
  return await makeGetRequest(CHARACTERS_API);
};
