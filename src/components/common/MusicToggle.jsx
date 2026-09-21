import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export default function MusicToggle({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && src) {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
    return () => {
      if (audio) audio.pause();
    };
  }, [src]);

  const toggle = () => {
    if (!src) {
      setPlaying((prev) => !prev);
      return;
    }
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <>
      {src ? <audio ref={audioRef} src={src} loop preload="none" /> : null}
      <div className="music-toggle">
        <button
          className="music-toggle__btn"
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? "♪" : "♫"}
        </button>
      </div>
    </>
  );
}

MusicToggle.propTypes = {
  src: PropTypes.string.isRequired,
};