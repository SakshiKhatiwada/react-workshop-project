import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repos: null,
  language: "",
  loading: false,
  error: null,
};

const repoFinderSlice = createSlice({
  name: "repoFinder",
  initialState: initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      state.repos = null;
      state.error = null;
    },

    fetchRepoRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchRepoSuccess: (state, action) => {
      state.repos = action.payload;
      state.loading = false;
    },

    fetchRepoFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setLanguage,
  fetchRepoFailure,
  fetchRepoRequest,
  fetchRepoSuccess,
} = repoFinderSlice.actions;

export default repoFinderSlice.reducer;
