
// import { AppContext } from "@/providers";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const VideoDetails = (
//     {
//   address,
//   title,
//   likes,
//   createdAt,
//   index,
// }: {
//   address: string;
//   title: string;
//   likes: string;
//   createdAt: string;
//   index: number;
// }
) => {
  //   const { likeVideo } = useContext(AppContext);
  return (
    <div className="w-full h-20 p-2">
      <div className="text-xl font-semibold py-2">{"title"}</div>
      <div className="flex gap-4">
        <div>
          <Image
            className="rounded-full object-cover w-16 h-16"
            src="https://static.thenounproject.com/png/5800652-200.png"
            width="50"
            height="30"
            alt="Chanel Icon"
            
          />
        </div>
        <div>
          <div className="text-lg font-bold">{`${"address"}`}</div>
          <div>{"createdAt"}</div>
        </div>
        <div className="items-center justify-center flex w-full">
          {/* <div className='rounded-lg px-2'>Join</div> */}
          <div className="flex  gap-2 flex-grow ">
            <div className="bg-black rounded-full  text-white p-2 px-4 ml-10">
              Subscribed
            </div>
          </div>
          <div className="flex items-center justify-center rounded-full bg-[#F3F2F3] ">
            <div
              className="flex gap-2 cursor-pointer hover:bg-[#bab9ba] w-full h-full p-2 px-4 rounded-l-full"
              onClick={() => {}}
            >
              <ThumbsUp />
              <p className="leading-[2] "> {"likes"}</p>
            </div>
            <div className="bg-[#959494] w-[1px] h-8" />
            <div className="flex gap-2 cursor-pointer hover:bg-[#bab9ba] w-full h-full p-2 px-4 rounded-r-full items-center">
              <ThumbsDown />
              <p className="leading-[2] opacity-0">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;