import { getSanityImageUrl } from "@/utils/getSanityImageUrl";
import { Linkedin } from "lucide-react";

const LinkedInButton = () => {
  return (
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center hover:scale-105 transition-all duration-500 w-fit bg-gray-100 rounded-full shadow-sm hover:shadow-md lg:text-base text-sm"
    >
      <div className="flex items-center justify-center bg-gray-100 text-gray-800 rounded-full lg:p-2 p-1.5 transition-all duration-300 z-10">
        <Linkedin className="lg:size-6 size-5" />
      </div>
      <div
        className={`
            overflow-hidden transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-[10rem] group-hover:opacity-100
          `}
      >
        <span className="whitespace-nowrap text-gray-800 rounded-full lg:pr-3 pr-2 lg:py-2 py-1.5 font-medium">
          LinkedIn
        </span>
      </div>
    </a>
  );
};

const SpeakerCard = ({ speaker }) => {
  const descriptionLines = speaker.description
    .split(",")
    .map((line) => line.trim());

  const nameParts = speaker.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div className="group flex gap-5 rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-102 h-[10rem] sm:h-[14rem] lg:h-[20rem]">
      <div className="relative h-full aspect-square">
        <img
          src={getSanityImageUrl(speaker.img.asset._ref, 400, 400)}
          alt={speaker.name}
          className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-slate-400 mix-blend-multiply opacity-40 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
      </div>
      <div className="flex flex-col lg:px-4 py-4 lg:py-8 gap-4 justify-between">
        <div>
          <h3>
            {firstName}{" "}
            <span className="bg-gradient-to-r from-black via-black to-black bg-clip-text transition-all duration-500 ease-in-out group-hover:from-violet-500 group-hover:via-violet-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">
              {lastName}
            </span>
          </h3>
          <div className="flex flex-col">
            {descriptionLines.map((line, index) => (
              <p key={index} className="speaker-label">
                {line}
              </p>
            ))}
          </div>
        </div>
        <LinkedInButton />
      </div>
    </div>
  );
};

export default SpeakerCard;
