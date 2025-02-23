import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const settingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = settingSlice.actions;
export default settingSlice.reducer;

export const selectCount = (state: any) => state.counter.value;
