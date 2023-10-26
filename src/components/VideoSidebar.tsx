import { Video } from "@/types/video.type";
import React from "react";

const VideoSidebar = (video: Video) => {
  return (
    <div className=" w-full h-2/7 cursor-pointer ">
      <div className="flex gap-2">
        <video src={video.videoUrl} className="w-1/2 rounded-lg" />
        <div className="text-black w-1/2">
          <div className="text-lg break-words">{video.title}</div>
          <div className="text-sm text-gray-700">{video.channelName}</div>
          <div className="text-sm text-gray-700">
            {video.views} &#x2022; {video.timeStamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSidebar;
