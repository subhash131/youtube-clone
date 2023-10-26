"use client";
import GoLiveSvg from "@/assets/GoLiveSvg";
import UploadSvg from "@/assets/UploadSvg";
import { toggleMoreOption } from "@/redux/features/MoreButtonToggleSlice";
import { toggleUploadVideo } from "@/redux/features/UploadVideoSlice";
import { RootState } from "@/redux/store";
// import { AppContext } from "@/providers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "./Overlay";

const MoreCard = () => {
  //   const { isCreateSelected, setIsUploadVideoSelected, setIsCreateSelected } =
  //     React.useContext(AppContext);

  const isMoreOptionSelected = useSelector(
    (state: RootState) => state.MoreButtonReducer.isMoreOptionSelected
  );
  const isUploadVideoSelected = useSelector(
    (state: RootState) => state.UploadVideoReducer.isUploadVideoSelected
  );
  const dispatch = useDispatch();

  return (
    <>
      <Overlay
        display={isMoreOptionSelected}
        bgBlur={false}
        onclick={() => {
          dispatch(toggleMoreOption());
        }}
      />
      <div
        className={` pt-4 flex flex-col w-40 h-28 bg-white border absolute top-14 rounded-xl right-24 z-[100]
    ${isMoreOptionSelected ? "" : "hidden"}`}
        id="clickbox"
      >
        <div
          className="flex p-2 px-4 gap-2 cursor-pointer hover:bg-[#EDEADE] transition-all"
          onClick={() => {
            dispatch(toggleUploadVideo());
            dispatch(toggleMoreOption());

            //   setIsUploadVideoSelected((prev) => !prev);
            //   setIsCreateSelected((prev) => !prev);
          }}
        >
          <UploadSvg />
          <p className="text-sm">Upload Video</p>
        </div>
        <div className="flex p-2 px-4 gap-2 cursor-pointer hover:bg-[#EDEADE] transition-all">
          <GoLiveSvg />
          <p className="text-sm ">Go Live</p>
        </div>
      </div>
    </>
  );
};

export default MoreCard;
