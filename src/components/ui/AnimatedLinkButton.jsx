import { useState } from "react";
import { ArrowRight } from "lucide-react";

const AnimatedLinkButton = ({
  label = "Learn More",
  href = "#",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 font-medium text-lg lg:text-2xl group transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="bg-gradient-to-r from-black via-black to-black bg-clip-text transition-all duration-500 ease-in-out group-hover:from-violet-500 group-hover:via-violet-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent relative">
        {label}
        <span className="absolute bottom-0 left-0 w-full h-0.5 ease-in-out bg-gradient-to-r from-violet-500 via-violet-500 to-blue-500"></span>
      </span>
      <ArrowRight
        className={`transition-transform duration-300 ${
          isHovered ? "translate-x-1" : ""
        }`}
        size={20}
      />
    </a>
  );
};

export default AnimatedLinkButton;
