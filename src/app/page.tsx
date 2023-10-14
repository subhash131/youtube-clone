"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { setAllVideos } from "@/redux/features/videoSlice";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  const videos = useSelector((state: RootState) => state.videoReducer.videos);
  const isMenuOpen = useSelector(
    (state: RootState) => state.MenuReducer.isMenuOpen
  );
  const dispatch = useDispatch();
  // console.log(videos);

  useEffect(() => {
    // TODO: get data and update the state
    // dispatch(setAllVideos(data));
  }, []);

  return (
    <div className="">
      <Navbar />
      <Sidebar />

      <div
        className={`mt-20 ${
          isMenuOpen ? "left-44 " : "left-20"
        } absolute w-[85%] `}
      >
        <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(14rem,1fr))]">
          {videos.map((video) => {
            return (
              <VideoCard
                id={video.id}
                channelName={video.channelName}
                channelImg={video.channelImg}
                timeStamp={video.timeStamp}
                title={video.title}
                videoUrl={video.videoUrl}
                views={video.views}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
