"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";
import { selectVideo } from "@/redux/features/videoSlice";

export default function Home() {
  const videos = useSelector((state: RootState) => state.VideoReducer.videos);
  const isMenuOpen = useSelector(
    (state: RootState) => state.MenuReducer.isMenuOpen
  );
  const dispatch = useDispatch();
  // console.log(videos);

  const handleVideoClick = (videoId: string) => {
    dispatch(selectVideo(videoId));
  };

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
              <Link
                href={`/${video.id}`}
                key={video.id}
                onClick={() => handleVideoClick(video.id)}
              >
                <VideoCard
                  id={video.id}
                  channelName={video.channelName}
                  channelImg={video.channelImg}
                  timeStamp={video.timeStamp}
                  title={video.title}
                  videoUrl={video.videoUrl}
                  views={video.views}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
