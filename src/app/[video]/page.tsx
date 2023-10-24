"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoPlayer from "@/components/VideoPlayer";

import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="w-screen h-screen relative overflow-x-hidden">
        <div className="flex gap-5 m-auto w-[90vw] ">
          <div className="mt-20 w-[80vw] overflow- top-[5rem] max-w-[1000px] rounded-xl">

              <VideoPlayer />
       
          </div>
          {/*TODO: right video bar */}
        </div>
      </div>
    </>
  );
};

export default page;
