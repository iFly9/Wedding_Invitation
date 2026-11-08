
import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

import song from "../assets/music/song.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
        setPlaying(false);
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      audio?.pause();
    };
  }, []);

  return (
    <div className="music-player">

      <audio
        ref={audioRef}
        src={song}
        loop
        preload="none"
      />

      <button
        onClick={toggle}
        type="button"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>

    </div>
  );
}

export default MusicPlayer;
