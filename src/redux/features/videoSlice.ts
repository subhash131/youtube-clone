import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [
    {
      id: "xyz1",
      title: "video title 1",
      channelName: "channel name",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      channelImg:
        "https://static.vecteezy.com/system/resources/previews/022/666/315/original/lion-face-silhouettes-lion-face-svg-black-and-white-lion-vector.jpg",
      timeStamp: "20 mins ago",
      views: "25M views",
      likes: "100",
    },
    {
      id: "xyz2",
      title: "video title 2",
      channelName: "channel name",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      channelImg:
        "https://static.vecteezy.com/system/resources/previews/022/666/315/original/lion-face-silhouettes-lion-face-svg-black-and-white-lion-vector.jpg",
      timeStamp: "20 mins ago",
      views: "25M views",
      likes: "100",
    },
  ],
  selectedVideo: {
    id: "",
    title: "",
    channelName: "",
    videoUrl: "",
    channelImg: "",
    timeStamp: "",
    views: "",
    likes: "",
  },
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
      )[0];
    },
  },
});

export default videoSlice.reducer;
export const { setAllVideos, selectVideo } = videoSlice.actions;
