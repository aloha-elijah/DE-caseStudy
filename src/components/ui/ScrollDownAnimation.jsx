import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ScrollDownAnimation = () => {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    // Set up animation interval
    const interval = setInterval(() => {
      setBounce((prev) => !prev);
    }, 1500);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    // Scroll down smoothly when clicked
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`flex flex-col items-center cursor-pointer transition-all duration-700 ${
        bounce ? "translate-y-2" : "translate-y-0"
      }`}
      onClick={handleClick}
    >
      <label className="text-xl font-medium mb-2 bg-gradient-to-r text-transparent from-violet-500 via-violet-500 to-blue-500 bg-clip-text">
        scroll down
      </label>
      <ChevronDown
        className={`text-gray-600 animate-pulse ${
          bounce ? "opacity-100" : "opacity-60"
        }`}
        size={32}
      />
    </div>
  );
};

export default ScrollDownAnimation;
