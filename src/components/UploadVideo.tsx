"use client";
// import { AppContext } from "@/providers";
import React, { useContext, useRef, useState } from "react";
import Overlay from "./Overlay";
import { ArrowUpFromLine, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleUploadVideo } from "@/redux/features/UploadVideoSlice";
import { toggleMoreOption } from "@/redux/features/MoreButtonToggleSlice";
// import toast from "react-hot-toast";

const UploadVideo = () => {
  const [video, setVideo] = useState<File | undefined>(undefined);
  const [title, setTitle] = useState<string>("");
  //   const { isUploadVideoSelected, setIsUploadVideoSelected, updloadVideo } =
  //     useContext(AppContext);
  const isUploadVideoSelected = useSelector(
    (state: RootState) => state.UploadVideoReducer.isUploadVideoSelected
  );
  const [isTransactionLoading, setIsTransactionLoading] =
    useState<boolean>(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  return (
    <>
      <Overlay
        display={isUploadVideoSelected}
        bgBlur={true}
        onclick={() => {
          dispatch(toggleUploadVideo());
        }}
      />
      <div
        className={`w-2/3 h-4/5 top-20 left-60 bg-white border  absolute  rounded-lg z-[1000000] overflow-hidden shadow-md ${
          isUploadVideoSelected ? "" : "hidden"
        }`}
      >
        <div className="flex w-full font-medium  bg-[red*] h-16 p-4 justify-between border-b px-8">
          <label>Upload Videos</label>
          <X
            onClick={() => {
              dispatch(toggleUploadVideo());
              //   setIsUploadVideoSelected(false);
              //   setVideo(undefined);
              fileRef.current!.value = "";
            }}
            className="cursor-pointer"
          />
        </div>
        <div className="w-full h-full p-4 grid place-items-center mt-[-6rem]">
          <div className="w-2/4 bg-[red*] gap-4  justify-center items-center flex flex-col">
            <div className="w-40 h-40 rounded-full place-items-center grid  bg-[#F9F9F9] relative cursor-pointer">
              <ArrowUpFromLine />
              <input
                type="file"
                id="select-files"
                accept="video/*"
                className="opacity-0 bg-red-50 absolute w-full h-full top-0 left-0 bottom-0 right-0 cursor-pointer"
                ref={fileRef}
                onChange={(e) => {
                  setVideo(e.target?.files![0]);
                }}
              />
            </div>
            <div className="text-center">
              {video ? (
                <div className="flex flex-col gap-1">
                  <label className="text-base inline-block">{video.name}</label>
                  <input
                    type="text"
                    placeholder="title.."
                    className="border rounded-lg p-2"
                    ref={titleRef}
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <span className="text-sm text-[#959594]">
                    Your videos will be private until you publish them.
                  </span>
                </div>
              ) : (
                <label className="text-base">
                  Drag and drop video files to upload <br />
                  <span className="text-sm text-[#959594]">
                    Your videos will be private until you publish them.
                  </span>
                </label>
              )}
            </div>
            <div className="">
              <label
                htmlFor={video ? "" : "select-files"}
                className="cursor-pointer block px-6 py-2 w-44 text-white text-center bg-[#075FD5] font-medium rounded"
                onClick={async () => {
                  if (isTransactionLoading) {
                    // toast.error("Transaction is loading, please Wait...");
                  }
                  if (video) {
                    // setIsTransactionLoading(true);
                    // await updloadVideo(video, title);
                    // setIsTransactionLoading(false);
                  }
                }}
              >
                {isTransactionLoading
                  ? "Loading..."
                  : video
                  ? "UPLOAD FILE"
                  : "SELECT FILE"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadVideo;
