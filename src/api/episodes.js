import { makeGetRequest } from "./common/ApiCaller";
import { EPISODES_API } from "./api";

export const getEpisodes = async () => {
  return await makeGetRequest(EPISODES_API);
};
