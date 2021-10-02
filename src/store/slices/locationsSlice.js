import { createSlice } from "@reduxjs/toolkit";
import { getLocations } from "../../api/locations";

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    loading: false,
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    locations: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

const { loading, locations } = locationsSlice.actions;

export const loadLocations = (dispatch) => {
  dispatch(loading);

  const promises = [getLocations()];

  return Promise.all(promises).then((list) => {
    dispatch(locations(list[0]));
  });
};

export const selectLocations = (state) => state.locations;

export default locationsSlice.reducer;
