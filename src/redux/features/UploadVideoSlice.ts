import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUploadVideoSelected: false,
};

const uploadVideoSlice = createSlice({
  name: "uploadVideo",
  initialState,
  reducers: {
    toggleUploadVideo: (state) => {
      state.isUploadVideoSelected = !state.isUploadVideoSelected;
    },
  },
});

export const { toggleUploadVideo } = uploadVideoSlice.actions;
export default uploadVideoSlice.reducer;
