import axios from "axios";

export const makeGetRequest = async (url) => {
  let response;

  try {
    response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error("Error:", err);
  }
};
