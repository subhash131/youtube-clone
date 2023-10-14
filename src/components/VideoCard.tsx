import { Video } from "@/types/video.type";
import React from "react";

const VideoCard = ({
  videoUrl,
  title,
  channelName,
  views,
  timeStamp,
  channelImg,
}: Video) => {
  return (
    <div className="cursor-pointer w-56">
      <video
        muted
        className="rounded-md hover:rounded-none hover:scale-[1.01] transition-all ease-in-out object-cover w-full h-32"
        onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
        onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
      >
        <source src={videoUrl} />
      </video>
      <div className="flex p-2">
        <img
          src={channelImg}
          width={50}
          height={50}
          className="rounded-full object-cover w-16 h-16"
        />
        <div>
          <p className="text-base font-medium">{title}</p>
          <p className="text-sm  text-gray-600">{channelName}</p>
          <p className="text-xs text-gray-600">
            {views} &#x2022; {timeStamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
