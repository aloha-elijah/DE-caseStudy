import { useState } from "react";

export default function LandingButton({ label }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };
  return (
    <button
      className={`
      relative overflow-hidden rounded-full 
      px-8 py-3 text-xl font-bold text-white
      transition-all duration-300 ease-in-out
      ${isHovered ? "shadow-lg" : "shadow-md"}
      ${
        isClicked
          ? "scale-95 bg-indigo-700"
          : "bg-slate-800 hover:bg-indigo-500"
      }
      focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
    `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <span className="relative z-10">{label}</span>

      {isClicked && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-30"></span>
        </span>
      )}

      <span
        className={`
        absolute bottom-0 left-0 right-0 top-0
        bg-gradient-to-r from-indigo-500 to-purple-600
        transition-transform duration-500
        ${isHovered ? "translate-x-0" : "-translate-x-full"}
      `}
      />
    </button>
  );
}
