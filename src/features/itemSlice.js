import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, items: {} };

export const itemSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    adding: (state, action) => {
      state.value++;
      state.items[action.payload] = (state.items[action.payload] || 0) + 1;
    },
    minus: (state, action) => {
      state.value--;
      state.items[action.payload]--;
    },
    deleteItem: (state, action) => {
      state.value = state.value - state.items[action.payload];
      delete state.items[action.payload];
    },
  },
});

export const { adding, minus, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;
