import { createSlice } from "@reduxjs/toolkit";
import { getEpisodes } from "../../api/episodes";

const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    loading: false,
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    episodes: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

const { loading, episodes } = episodesSlice.actions;

export const loadEpisodes = (dispatch) => {
  dispatch(loading);

  const promises = [getEpisodes()];

  return Promise.all(promises).then((list) => {
    dispatch(episodes(list[0]));
  });
};

export const selectEpisodes = (state) => state.episodes;

export default episodesSlice.reducer;
