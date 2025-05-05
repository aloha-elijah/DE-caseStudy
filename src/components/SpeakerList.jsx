import { useEffect, useState } from "react";
import { fetchSpeakers } from "../api/fetchSpeakers";
import { getSanityImageUrl } from "../utils/getSanityImageUrl";

export default function SpeakerList() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetchSpeakers().then(setSpeakers);
  }, []);

  return (
    <div className="speaker-grid">
      {speakers.map((s) => (
        <div key={s._id} className="speaker-card">
          <h3>{s.name}</h3>
          <p>{s.description}</p>
          <img src={getSanityImageUrl(s.img.asset._ref)} alt={s.name} />
        </div>
      ))}
    </div>
  );
}
