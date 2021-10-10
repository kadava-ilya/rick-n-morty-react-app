import { makeGetRequest } from "./common/ApiCaller";
import { LOCATIONS_API } from "./api";

export const getLocations = async (data) => {
  return await makeGetRequest(LOCATIONS_API + data);
};
