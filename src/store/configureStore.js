import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import characters from "./slices/charactersSlice";
import episodes from "./slices/episodesSlice";
import locations from "./slices/locationsSlice";
import filters from "./slices/filterSLice";

export default configureStore({
  reducer: {
    characters,
    episodes,
    locations,
    filters,
  },
  middleware: [thunk],
});
