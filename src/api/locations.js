import { makeGetRequest } from "./common/ApiCaller";
import { LOCATIONS_API } from "./api";

export const getLocations = async () => {
  return await makeGetRequest(LOCATIONS_API);
};
