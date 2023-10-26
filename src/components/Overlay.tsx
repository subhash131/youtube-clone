// import { AppContext } from "@/providers";
import React, { useContext } from "react";

const Overlay = ({
  display,
  bgBlur,
  onclick,
}: {
  display: boolean;
  bgBlur: boolean;
  onclick?: () => void;
}) => {
  //   const { setIsUploadVideoSelected } = useContext(AppContext);
  return (
    <div
      className={`absolute w-screen h-screen bg-transparent ${
        bgBlur ? "backdrop-blur-sm" : ""
      } z-[9] ${display ? "" : "hidden"}`}
      onClick={onclick}
    ></div>
  );
};

export default Overlay;
