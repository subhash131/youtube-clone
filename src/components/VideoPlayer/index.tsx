"use client";
import CaptionsSvg from "@/assets/CaptionsSvg";
import { FullScreenCloseSvg, FullScreenOpenSvg } from "@/assets/FullScreeSvg";
import MiniPlayerSvg from "@/assets/MiniPlayerSvg";
import PauseSvg from "@/assets/PauseSvg";
import PlaySvg from "@/assets/PlaySvg";
import SkipNextSvg from "@/assets/SkipNextSvg";
import { TheaterTallSvg, TheaterWideSvg } from "@/assets/TheaterSvg";
import VolumeSvg from "@/assets/VolumeSvg";
import { Video } from "@/types/video.type";
import React, { useEffect, useRef, useState } from "react";
import VideoDetails from "./VideoDetails";

import "./index.css"

const VideoPlayer = (
//   {
//   videoUrl,
//   address,
//   title,
//   likes,
//   createdAt,
//   index,
// }: Video
) => {
  const theraterMode = "max-w-[initial] w-full max-h-[90vh]";
  // const miniPlayer = "max-w-[initial] w-full max-h-[80vh] "
  const [isFullScreen, setisFullScreen] = useState<boolean>(false);
  const [isVideoPaused, setIsVideoPaused] = useState<boolean>(true);
  const [isTheraterMode, setisTheraterMode] = useState<boolean>(false);
  const [isMiniPlayer, setisMiniPlayer] = useState<boolean>(false);
  const [volumeLevel, setVolumeLevel] = useState<number>(0.56);
  const [videoDuration, setVideoDuration] = useState<string>("--:--");
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeLineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleFullScreen = () => {
    if (isMiniPlayer) {
      document.exitPictureInPicture();
      setisMiniPlayer(false);
    }
    if (!document.fullscreenElement) {
      setisFullScreen(true);
      containerRef.current!.requestFullscreen();
    } else {
      if (isTheraterMode) setisTheraterMode(false);
      setisFullScreen(false);
      document.exitFullscreen();
    }
  };
 
  const skip = (seconds: number) => {
    videoRef.current!.currentTime += seconds;
  };
  const togglePlay = () => {
    if (isVideoPaused) {
      videoRef.current?.play();
      setIsVideoPaused((preVal) => !preVal);
    } else {
      videoRef.current?.pause();
      setIsVideoPaused((preVal) => !preVal);
    }
  };

  const toggleMiniPlayer = () => {
    if (document.fullscreenElement) setisFullScreen(false);
    if (document.pictureInPictureElement) setisTheraterMode(false);

    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
      setisMiniPlayer(false);
    } else {
      videoRef.current?.requestPictureInPicture();
      setisMiniPlayer(true);
    }
  };
  const toggleTheaterMode = () => {
    // console.log("Theater")
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
      setisMiniPlayer(false);
    }
    if (document.fullscreenElement) {
      setisFullScreen(false);
      document.exitFullscreen();
    }
    setisTheraterMode((prev) => !prev);
  };
  const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });
  function formatDuration(time: number) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    if (hours === 0) {
      return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
    } else {
      return `${hours}:${leadingZeroFormatter.format(
        minutes
      )}:${leadingZeroFormatter.format(seconds)}`;
    }
  }

  const updateVideoSpeed = () => {
    if (videoRef.current?.playbackRate === 1) {
      videoRef.current!.playbackRate = 1.5;
    } else if (videoRef.current?.playbackRate === 1.5) {
      videoRef.current!.playbackRate = 2;
    } else if (videoRef.current?.playbackRate === 2) {
      videoRef.current!.playbackRate = 0.5;
    } else {
      videoRef.current!.playbackRate = 1;
    }
  };
  const updateTimeLine = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
    (e.target as HTMLDivElement).style.setProperty(
      "--preview-position",
      percent.toString()
    );

    const isScrubbing = (e.buttons & 1) === 1;
    if (isScrubbing) {
      (timeLineRef.current as HTMLDivElement).style.setProperty(
        "--progress-position",
        percent.toString()
      );
      videoRef.current!.currentTime = percent * videoRef.current!.duration;
      if (!videoRef.current!.paused) {
        videoRef.current?.play();
      }
    }
  };
  const toggleVolume = () => {
    setVolumeLevel((volLevel) => (volLevel == 0 ? 0.6 : 0));
    if (!videoRef.current?.volume) videoRef.current!.volume = 0.6;
    else videoRef.current!.volume = 0;
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;
      if (activeTag === "button") return;

      // console.log(e.key.toLocaleLowerCase())
      switch (e?.key.toLocaleLowerCase()) {
        case " ":
          togglePlay();
          break;
        case "k":
          togglePlay();
          break;
        case "f":
          toggleFullScreen();
          break;
        case "t":
          toggleTheaterMode();
          break;
        case "i":
          toggleMiniPlayer();
          break;
        case "m":
          toggleVolume();
          break;
        case "arrowleft":
        case "j":
          skip(-5);
          break;
        case "arrowright":
        case "l":
          skip(5);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`overflow-hidden m-auto box-border w-full rounded-xl  flex justify-center items-center group relative ease-in-out bg-black ${
          isTheraterMode ? theraterMode : ""
        }`}
        ref={containerRef}
      >
        <div
          className={`controls-container absolute bottom-0 left-0 right-0 text-white z-10  transition-opacity group-hover:opacity-100 ${
            isVideoPaused ? "opacity-100" : "opacity-0"
          }  `}
        >
          <div
            className="timeline-container h-[7px] mx-2 cursor-pointer flex items-center"
            onMouseMove={updateTimeLine}
            ref={timeLineRef}
            onClick={(e) => {
              const rect = (timeLineRef.current as HTMLDivElement).getBoundingClientRect();
              const percent =
                Math.min(Math.max(0, e.clientX - rect.x), rect.width) /
                rect.width;
              (timeLineRef.current as HTMLDivElement).style.setProperty(
                "--progress-position",
                percent.toString()
              );
              videoRef.current!.currentTime =
                percent * videoRef.current!.duration;
              if (!videoRef.current!.paused) {
                videoRef.current?.play();
              }
            }}
          >
            <div className="timeline bg-[rgba(100,100,100,.5)] h-[3px] w-full relative"></div>
          </div>
          <div className='flex p-1 items-center before:content-[""] before:absolute before:bottom-0 before:bg-gradient-to-t before:from-[rgba(0,0,0,.75),transparent] before:z-[-1] before:aspect-[6/1] before:w-full before:h-40 before:left-0 justify-between '>
            <div className="z-20 flex gap-2">
              <button
                className="p-0 bg-none mb-2 text-inherit h-[30px] w-[30px]  cursor-pointer border-none text-lg opacity-80 hover:opacity-100 transition-opacity ease-in-out "
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                {isVideoPaused ? <PauseSvg /> : <PlaySvg />}
              </button>
              <button
                className="p-0 bg-none text-inherit h-[30px] w-[30px] cursor-pointer border-none text-lg opacity-80 hover:opacity-100 transition-opacity ease-in-out "
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                <SkipNextSvg />
              </button>
              <div className="flex items-center volume mb-2">
                <button
                  className="bg-none text-inherit h-[30px] w-[30px]  cursor-pointer border-none text-lg opacity-80 hover:opacity-100 transition-all ease-in-out delay-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVolume();
                  }}
                >
                  <VolumeSvg
                    type={`${
                      volumeLevel == 0
                        ? "muted"
                        : volumeLevel < 0.5
                        ? "low"
                        : "high"
                    }`}
                    className="transition-all ease-in-out delay-1000"
                  />
                </button>
                <input
                  type="range"
                  step="any"
                  value={volumeLevel}
                  max="1"
                  min="0"
                  className="slider bg-[white]  h-[2px]  appearance-none transition ease-in-out "
                  onChange={(e) => {
                    setVolumeLevel(Number(e.target.value));
                    videoRef.current!.volume = Number(e.target?.value);
                  }}
                />
              </div>
              <div className="duration-container flex gap-1 items-center mb-2">
                <div className="current-time text-sm">{currentTime}</div>/
                <div className="total-time text-sm">{videoDuration}</div>
              </div>
            </div>
            <div className="z-20 flex gap-2 mb-2">
              <button className="p-0 bg-none text-inherit h-[30px] w-[30px]  cursor-pointer border-none text-lg opacity-80 hover:opacity-100 transition-opacity ease-in-out ">
                <CaptionsSvg />
              </button>
              <button
                className="p-0 bg-none text-inherit h-[30px] w-[30px]  cursor-pointer border-none text-sm opacity-80 hover:opacity-100 transition-opacity ease-in-out "
                onClick={updateVideoSpeed}
              >
                {videoRef.current?.playbackRate || 1}x
              </button>
              <button
                className="p-0 bg-none text-inherit h-[30px] w-[30px]  cursor-pointer border-none text-lg opacity-80 hover:opacity-100 transition-opacity ease-in-out "
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMiniPlayer();
                }}
              >
                <MiniPlayerSvg />
              </button>
              <button
                className="p-0 bg-none text-inherit h-[30px] w-[30px]  cursor-pointer border-none text-lg opacity-80 hover:opacity-100 transition-opacity ease-in-out "
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTheaterMode();
                }}
              >
                {isTheraterMode ? <TheaterWideSvg /> : <TheaterTallSvg />}
              </button>
              <button
                className="p-0 bg-none text-inherit h-[30px] w-[30px]  cursor-pointer border-none text-lg opacity-80 hover:opacity-100 transition-opacity ease-in-out "
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullScreen();
                }}
              >
                {isFullScreen ? <FullScreenCloseSvg /> : <FullScreenOpenSvg />}
              </button>
            </div>
          </div>
        </div>
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            className={`w-full ${isFullScreen ? "" : "max-h-[70vh]"}`}
            ref={videoRef}
            onClick={togglePlay}
            onLoadedData={(e) => {
              setVideoDuration(
                formatDuration(Number((videoRef.current as HTMLVideoElement).duration))
              );
            }}
            onPlay={(e) => {
              setVideoDuration(
                formatDuration(Number((videoRef.current as HTMLVideoElement).duration))
              );
            }}
            onTimeUpdate={(e) => {
              setCurrentTime(
                formatDuration(Number((videoRef.current as HTMLVideoElement).currentTime))
              );
              const percent =
                (videoRef.current as HTMLVideoElement).currentTime /
                (videoRef.current as HTMLVideoElement).duration;

              timeLineRef.current?.style.setProperty(
                "--progress-position",
                percent.toString()
              );
            }}
          />
        </div>
      <VideoDetails
        // address={address}
        // title={title}
        // likes={likes}
        // createdAt={createdAt}
        // index={index!}
      />
    </>
  );
};

export default VideoPlayer;