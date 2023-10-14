import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [
    {
      id: "xyz1",
      title: "video title",
      channelName: "channel name",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      channelImg:
        "https://static.vecteezy.com/system/resources/previews/022/666/315/original/lion-face-silhouettes-lion-face-svg-black-and-white-lion-vector.jpg",
      timeStamp: "20 mins ago",
      views: "25M views",
    },
  ],
  selectedVideo: {},
};

export const videoSlice = createSlice({
  name: "videos",
  initialState,

  reducers: {
    setAllVideos: (state, actions) => {
      state.videos = actions.payload;
    },
    selectVideo: (state, actions) => {
      state.selectedVideo = state.videos.filter(
        (video) => video.id === actions.payload
      );
    },
  },
});

export default videoSlice.reducer;
export const { setAllVideos, selectVideo } = videoSlice.actions;
