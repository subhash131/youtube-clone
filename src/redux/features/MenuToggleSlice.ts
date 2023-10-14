import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

export const menuToggleSlice = createSlice({
  name: "MenuToggle",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = menuToggleSlice.actions;
export default menuToggleSlice.reducer;
