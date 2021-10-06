import { createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "../../api/characters";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    loading: false,
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    characters: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

const { loading, characters } = charactersSlice.actions;

export const loadCharacters = (dispatch, filters) => {
  dispatch(loading());

  const promises = [getCharacters(filters)];

  return Promise.all(promises).then((list) => {
    dispatch(characters(list[0]));
  });
};

export const selectCharacters = (state) => state.characters;

export default charactersSlice.reducer;
