import { useEffect, useState } from "react";
import { fetchSpeakers } from "@/api/fetchSpeakers";
import SpeakerCard from "@/components/ui/SpeakerCard";

const SpeakerSection = ({ sectionTitle = "" }) => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetchSpeakers().then(setSpeakers);
  }, []);

  return (
    <div className="text-black section-padding pt-[12rem] w-full">
      <div className="w-full flex relative flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 lg:sticky top-[8rem] self-start">
          <h2>{sectionTitle}</h2>
        </div>
        <div className="flex flex-col gap-5 w-full lg:w-2/3">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker._id} speaker={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
