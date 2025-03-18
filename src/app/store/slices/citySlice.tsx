import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: {} };

const settingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    selectCity(state, action) {
      if (!state.value) {
        state.value = {};
      }
      state.value = action.payload;
    },
  },
});

export const { selectCity } = settingSlice.actions;
export default settingSlice.reducer;

export const selectcitydata = (state: any) => state.citySlice.value;
