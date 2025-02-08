import { configureStore } from "@reduxjs/toolkit";
import repoFinderSlice from "../slices/repoFinderSlice";

const store = configureStore({
  reducer: {
    repoFinder: repoFinderSlice,
  },
});

export default store;
