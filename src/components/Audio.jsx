import { useEffect, useRef, useState } from "react";
import { audioArray } from "../utils/audioArray";
import { generateAudio } from "../utils/api";
export default function Audio({
  languageCode,
  text,
  className,
  value,
  type,
  img,
}) {
  const availableAudios = audioArray.filter((obj) => {
    if (obj.language_code.includes(languageCode)) return obj;
  });
  console.log(languageCode);
  console.log(availableAudios);
  console.log(text);
  const player = useRef(null);

  const [audioURL, setAudioURL] = useState("");
  async function togglePlay() {
    const a = await generateAudio(availableAudios[0].voice_code, text);
    setAudioURL(a);
  }

  useEffect(() => {
    if (audioURL != "") player.current.play();
  }, [audioURL]);

  return (
    <div>
      <button className={className} type={type} onClick={togglePlay}>
        <audio ref={player} src={audioURL} />
        {img && <img className="play" src={img} alt="play" />}
        play
      </button>
    </div>
  );
}
