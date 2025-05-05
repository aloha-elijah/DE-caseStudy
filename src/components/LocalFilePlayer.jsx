import { useState, useRef } from "react";
import React from "react";

const LocalFilePlayer = () => {
  const videoList = [
    "/media/deepAI_Video-01.mp4",
    "/media/deepAI_Video-02.mp4",
    "/media/deepAI_Video-03.mp4",
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
  };

  return (
    <video
      ref={videoRef}
      src={videoList[currentVideoIndex]}
      autoPlay
      muted
      onEnded={handleVideoEnd}
      onError={() =>
        console.error("Failed to load video:", videoList[currentVideoIndex])
      }
      className="absolute inset-0 min-h-full min-w-full object-cover"
    />
  );
};
export default LocalFilePlayer;
