import { createSlice } from "@reduxjs/toolkit";
import { loadCharacters } from "./charactersSlice";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    data: {
      gender: "",
      status: "",
      species: "",
    },
  },
  reducers: {
    save: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { save } = filterSlice.actions;
export const selectFilter = (state) => state.filter;
export const changeFilter = (dispatch, data) => {
  dispatch(save(data));
  //   loadCharacters(dispatch);
};
export default filterSlice.reducer;
