import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src="/src/assets/music/song.mp3" loop />

      <button onClick={toggle}>
        {playing ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}

export default MusicPlayer;