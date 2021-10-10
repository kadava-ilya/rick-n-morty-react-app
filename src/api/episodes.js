import { makeGetRequest } from "./common/ApiCaller";
import { EPISODES_API } from "./api";

export const getEpisodes = async (data) => {
  return await makeGetRequest(EPISODES_API + data);
};
