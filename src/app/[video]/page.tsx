"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoPlayer from "@/components/VideoPlayer";
import VideoSidebar from "@/components/VideoSidebar";
import { selectVideo } from "@/redux/features/videoSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useParams } from "next/navigation";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const urlParam = useParams();
  const videoList = useSelector(
    (state: RootState) => state.VideoReducer.videos
  );

  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="w-screen h-screen relative overflow-x-hidden">
        <div className="flex gap-5 m-auto w-[90vw] ">
          <div className="flex gap-5">
            <div className="mt-20 overflow- top-[5rem] max-w-[1000px] rounded-xl ">
              <VideoPlayer />
            </div>
            <div className="w-[30vw] h-[90vh] p-4 mt-16 gap-3 flex flex-col  overflow-y-scroll overflow-x-hidden no-scrollbar">
              {videoList.map((video) => {
                return (
                  <Link
                    href={`/${video.id}`}
                    key={video.id}
                    onClick={() => dispatch(selectVideo(video.id))}
                  >
                    <VideoSidebar
                      channelImg={video.channelImg}
                      channelName={video.channelName}
                      id={video.id}
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
      </div>
    </>
  );
};

export default Page;
