import { createSlice } from "@reduxjs/toolkit";

const initialResultState = { searchResults: null };

const resultSlice = createSlice({
  name: "result",
  initialState: initialResultState,
  reducers: {
    songResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const resultActions = resultSlice.actions;

export default resultSlice.reducer;
