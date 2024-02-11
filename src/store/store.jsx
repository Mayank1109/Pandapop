import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    result: resultReducer,
  },
});

export default store;
