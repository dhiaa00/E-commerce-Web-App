import { configureStore } from "@reduxjs/toolkit";
import itemSliceReducer from "../features/itemSlice";

export const store = configureStore({
  reducer: {
    itemShoped: itemSliceReducer,
  },
});
