import { useState, useEffect } from "react";

const SizeHelper = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    breakpoint: getBreakpoint(window.innerWidth),
  });

  function getBreakpoint(width) {
    if (width < 640) return "xs";
    if (width < 768) return "sm";
    if (width < 1024) return "md";
    if (width < 1280) return "lg";
    if (width < 1536) return "xl";
    return "2xl";
  }

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: getBreakpoint(window.innerWidth),
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define colors for different breakpoints for better visibility
  const colors = {
    xs: "bg-red-500",
    sm: "bg-orange-500",
    md: "bg-yellow-500",
    lg: "bg-green-500",
    xl: "bg-blue-500",
    "2xl": "bg-purple-500",
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <div
        className={`px-4 py-2 rounded-lg shadow-lg text-white font-bold ${
          colors[size.breakpoint]
        }`}
      >
        {size.breakpoint} ({size.width} × {size.height})
      </div>
      <div className="mt-2 text-xs bg-gray-800 text-white p-2 rounded-lg shadow-lg">
        <div className="block sm:hidden">xs only (&lt;640px)</div>
        <div className="hidden sm:block md:hidden">sm only (640px-767px)</div>
        <div className="hidden md:block lg:hidden">md only (768px-1023px)</div>
        <div className="hidden lg:block xl:hidden">lg only (1024px-1279px)</div>
        <div className="hidden xl:block 2xl:hidden">
          xl only (1280px-1535px)
        </div>
        <div className="hidden 2xl:block">2xl only (≥1536px)</div>
      </div>
    </div>
  );
};

export default SizeHelper;
