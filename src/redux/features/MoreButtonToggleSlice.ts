import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMoreOptionSelected: false,
};

export const moreButtonToggleSlice = createSlice({
  name: "MoreButtonToggle",
  initialState,
  reducers: {
    toggleMoreOption: (state) => {
      state.isMoreOptionSelected = !state.isMoreOptionSelected;
    },
  },
});

export const { toggleMoreOption } = moreButtonToggleSlice.actions;
export default moreButtonToggleSlice.reducer;
