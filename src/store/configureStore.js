import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import characters from "./slices/charactersSlice";
import episodes from "./slices/episodesSlice";
import locations from "./slices/locationsSlice";

export default configureStore({
  reducer: {
    characters,
    episodes,
    locations,
  },
  middleware: [thunk],
});
